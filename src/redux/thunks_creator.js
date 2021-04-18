import { setIn } from "formik";
import { InvalidFieldsAPI, AuthrorizationError, InnocorrectEmailOrPasword } from "../customErrors/customErrors";
import { handleProfile, handleStatus, handleSurbscribe } from "../helpers/helpers";
import { httpReq } from "../RestAPI/axios";
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
  set_follow,
  set_unfollow,
  set_captcha
} from "./actions_creator";

export const toAuthorize = () => {
  return (dispatch) => {
    dispatch(set_load(false));
    httpReq.auth_me //maybe general error example: NETWORK, FORBIDDEN, SERVER
      .then(({ data: { data, resultCode, messages } }) => {
        if (resultCode === 0) {
          dispatch(set_user({ ...data }));
          dispatch(set_authorize({ authorize: true }));
          dispatch(set_error(''))
          return;
        } //maybe error from api, but status 200: 
        throw new AuthrorizationError(messages.join(" "));
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
    httpReq.profile
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
    httpReq.profile
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

export const getUsers = ({ page = 1, usersOnPage = 20 }) => {
  return (dispatch) => {
    httpReq.users
      .get_users(page, usersOnPage).then(({ data }) => {
        dispatch(set_users({ data }));
        dispatch(set_page_info({ page, usersOnPage }))
        dispatch(set_error(''))
      });
  };
};

export const setAvatar = (image) => {
  return (dispatch) => {
    httpReq.users
      .set_avatar(image)
      .then((response) => {
        dispatch(set_avatar({ ...response.data.data.photos }));
        dispatch(set_error(''))
      })
  }
}

export const sign_in = (props) => {
  const { email, password, captcha, rememberMe, setErrors, setSubmitting } = props;
  return (dispatch) => {
    httpReq.registration
      .sign_in({ email, password, captcha, rememberMe })
      .then(({ data: { resultCode, messages, data: { userId: id } } }) => {
        if (resultCode === 0) {
          dispatch(set_user({ ...props, id }));
          dispatch(set_authorize({ authorize: true }));
          dispatch(set_captcha(''));
          dispatch(set_error(''));
          return;
        }
        if (resultCode === 10) {
          httpReq.captcha
            .get_captcha_url()
            .then(({ data: { url } }) => dispatch(set_captcha(url)))
        }
        throw new InnocorrectEmailOrPasword(messages);

      })
      .catch((e) => {
        if (e instanceof InnocorrectEmailOrPasword) {
          setErrors({ email: e.message })
          return
        }
        dispatch(set_error(e.name + ':' + e.message));
      })
      .finally(() => setSubmitting(false))
  }
}

export const logout = () => {
  return (dispatch) => {
    httpReq.registration
      .logout()
      .then(({ data: { resultCode } }) => {
        if (resultCode === 0) {
          dispatch(set_user({ email: null, id: null, login: null }))
          dispatch(set_authorize({ authorize: false }));
        }
      })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    handleSurbscribe({ dispatch, id, follow: true, set_follow });
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    handleSurbscribe({ dispatch, id, set_unfollow });
  }
}

export const getStatus = (userID) => {
  return (dispatch) => {
    handleStatus({ statusGet: true, userID, dispatch, set_status, set_error });
  };
};

export const setStatus = (status) => {
  return (dispatch) => {
    handleStatus({ status, dispatch, set_status, set_error });
  };
};