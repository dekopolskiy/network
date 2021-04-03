import { auth_me, profileHTTP, statusHTTP, usersHTTP } from "../RestAPI/axios";
import {
  set_error,
  set_load,
  set_user,
  set_profile,
  set_status,
  set_users,
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

export const getUsers = (page, usersOnPage) => {
  return (dispatch) => {
    usersHTTP.get_users(page, usersOnPage).then(({ data }) => {
      dispatch(set_users({ data, page, usersOnPage }));
    });
  };
};
