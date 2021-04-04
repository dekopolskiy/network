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
    auth_me
      .then(({ data: { data, resultCode, messages } }) => {
        if (resultCode === 0) {
          dispatch(set_user(data));
        } else {
          throw new Error(messages.join(" "));
        }
      })
      .catch((error) => {
        dispatch(set_error(error.toString()));
      })
      .finally(() => {
        dispatch(set_load(true));
      });
  };
};

export const getProfile = (userID) => {
  return (dispatch) => {
    profileHTTP
      .get_profile(userID)
      .then(({ data }) => dispatch(set_profile(data)))
      .catch((error) => {
        dispatch(set_error(error.toString()));
      });
  };
};

export const setProfile = (data, setErrors, setSubmitting) => {
  return (dispatch) => {
    profileHTTP
      .set_profile(data)
      .then(({ data: { messages, resultCode } }) => {
        if (resultCode === 0) {
          dispatch(set_profile(data))
        } else {
          throw new Error(messages);
        }
      })
      .catch((e) => {//'error. (AboutMe), error. (FullName)'
        
        const errors = e.message.split(',').reduce((prev, item) => {//["error. (AboutMe)", "error. (FullName)"]
            console.log(item)
            let key = item.match(/\((.+?)\)/)[1];
            let value = item.match(/.+?\./i)[0];
            prev[key[0].toLowerCase() + key.slice(1)] = value;
            return prev;
        }, {} ); 
        setErrors(errors);
      })
      .finally(() => {
        setSubmitting(false);
      })
  };
};
// Error: The FullName field is required. (FullName)


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
