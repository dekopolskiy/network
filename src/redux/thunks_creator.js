import { InvalidFieldsAPI, AuthrorizationError } from "../customErrors/customErrors";
import { auth_me, profileHTTP, statusHTTP, usersHTTP } from "../RestAPI/axios";
import {
  set_error,
  set_load,
  set_user,
  set_profile,
  set_status,
  set_users,
  set_page_info,
  set_avatar,
} from "./actions_creator";

export const toAuthorize = () => {
  return (dispatch) => {
    dispatch(set_load(false));
    auth_me //maybe general error example: NETWORK, FORBIDDEN, SERVER
      .then(({ data: { data, resultCode, messages } }) => {
        if (resultCode === 0) {
          dispatch(set_user(data));
        } else { //maybe error from api, but status 200: 
          throw new AuthrorizationError(messages.join(" "));
        }
      })
      .catch((e) => {
        dispatch(set_error(e.name, '_', e.message));
      })
      .finally(() => {
        dispatch(set_load(true));
      });
  };
};

export const getProfile = (userID, handleLoad) => {
  return (dispatch) => {
    // handleLoad(false);
    profileHTTP
      .get_profile(userID)
      .then(({ data }) => dispatch(set_profile(data)))
      .catch((e) => {
        dispatch(set_error(e.name, '_', e.message));
      })
      .finally(() => {
        // handleLoad(true)

      })
  };
};

export const setProfile = (data, setErrors, setSubmitting) => {
  // const formdata = new FormData();
  // Object.entries(data).forEach(([key, value]) => {
  //   formdata.append(key, value);
  // })415 StatusCODE
  return (dispatch) => {
    profileHTTP
      .set_profile(data)
      .then(({ data: { messages, resultCode }, message }) => {
        debugger
        if (resultCode === 0) {
          dispatch(set_profile(data))
        } else {//server error 
          throw new InvalidFieldsAPI(messages);//CustomERROR
        }
      })
      .catch((e) => {
        debugger
        //maybe 403 or any error 
        if (e instanceof InvalidFieldsAPI) {
          const errors = e.message.split(',').reduce((prev, item) => {//["error. (AboutMe)", "error. (FullName)"]
            let key = item.match(/\((.+?)\)/)[1];
            let value = item.match(/.+?\./i)[0];
            prev[key[0].toLowerCase() + key.slice(1)] = value;
            return prev;
          }, {});
          setErrors(errors);
        } else {
          dispatch(set_error(e.name + '_' + e.message));//ERROR COMPONENT and if(error) view, else view APP

        }
      })
      .finally(() => {
        setSubmitting(false);
      })
  };
};

export const getStatus = (userID) => {
  return (dispatch) => {
    statusHTTP
      .get_status(userID)
      .then(({ data }) => dispatch(set_status(data)));
  };
};

export const setStatus = (status) => {
  return (dispatch) => {
    statusHTTP.set_status(status).then(() => dispatch(set_status(status)));
  };
};

export const getUsers = ({ page = 1, usersOnPage = 20 }) => {
  return (dispatch) => {
    usersHTTP.get_users(page, usersOnPage).then(({ data }) => {
      dispatch(set_users({ data }));
      dispatch(set_page_info({ page, usersOnPage }))
    });
  };
};

export const setAvatar = (image) => {
  return (dispatch) => {
    usersHTTP.set_avatar(image)
      .then((response) => {
        dispatch(set_avatar({ ...response.data.data.photos }));
      })
  }
}
