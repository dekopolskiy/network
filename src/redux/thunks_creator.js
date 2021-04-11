import { setIn } from "formik";
import { InvalidFieldsAPI, AuthrorizationError } from "../customErrors/customErrors";
import { auth_me, profileHTTP, registrationHTTP, statusHTTP, usersHTTP } from "../RestAPI/axios";
import {
  set_error,
  set_load,
  set_user,
  set_profile,
  set_status,
  set_users,
  set_page_info,
  set_avatar,
  set_authorize,
} from "./actions_creator";

export const toAuthorize = () => {
  return (dispatch) => {
    dispatch(set_load(false));
    auth_me //maybe general error example: NETWORK, FORBIDDEN, SERVER
      .then(({ data: { data, resultCode, messages } }) => {
        if (resultCode === 0) {
          dispatch(set_user({ ...data }));
          dispatch(set_authorize({authorize: true }));
        } else { //maybe error from api, but status 200: 
        throw new AuthrorizationError(messages.join(" "));
        }
      })
      .catch((e) => {
        dispatch(set_error(e.name + ':' + e.message));
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
        dispatch(set_error(e.name + ':' + e.message));
      })
      .finally(() => {
        // handleLoad(true)
      })
  };
};

export const setProfile = (data, { setErrors, setSubmitting }) => {
  // const formdata = new FormData();
  // Object.entries(data).forEach(([key, value]) => {
  //   formdata.append(key, value);
  // })415 StatusCODE
  return (dispatch) => {
    profileHTTP
      .set_profile(data)
      .then(({ data: { messages, resultCode } }) => {
        if (resultCode === 0) {
          dispatch(set_profile(data));
          return;
        } 
          throw new InvalidFieldsAPI(messages);//CustomERROR
      })
      .catch((e) => {
        //maybe 403 or any error 
        if (e instanceof InvalidFieldsAPI) { //Facebook field is reqiured (Contacts=>Facebook), etc
          let errors = {};
          e.message.split(',').forEach((item) => {//["error (AboutMe)", "error (Contacts=>facebook)"]
            let key = item.match(/\((.+?)\)/)[1];
            let value = item.match(/(.+?)\(/)[1]; //'Contacts->Youtube' or fullName
            key = key.split('->').map((i) => i[0].toLowerCase() + i.slice(1)).join('.');//Youtube=>youtube
            errors = {
              ...setIn(errors, key, value),//setIn return new object, dont change main object
            }//setIn transform one.two IN one:{two}, so setErrors() does not handle correctly one.two,
            //but correctly handle simple object setErrors{ {one: {two: three }}}
          })
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

export const sign_in = (props) => {
  return (dispatch) => {
    registrationHTTP
      .sign_in(props)
      .then(({ data: { resultCode, messages, data : { userId : id } } }) => {
        if(resultCode === 0) {
          dispatch(set_user({...props, id }));
          dispatch(set_authorize({authorize: true}));
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    registrationHTTP
    .logout().then( ({ data: { resultCode }}) => {
        if(resultCode === 0 ) {
          dispatch(set_user({ email: null, id: null, login: null }))
          dispatch(set_authorize({authorize: false}));
        }
    })
  }
}
