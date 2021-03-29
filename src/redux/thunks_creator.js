import { auth_me, profile } from "../RestAPI/axios";
import { set_error, set_load, set_user, set_profile } from "./actions_creator";

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

export const get_profile = (userID) => {
  return (dispatch) => {
    profile
      .get_profile(userID)
      .then(({ data }) => dispatch(set_profile(data)))
      .catch((error) => {
        dispatch(set_error(error.toString()));
      });
  };
};
