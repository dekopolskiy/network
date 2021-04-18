export const SET_PROFILE = "network/profile/SET_PROFILE";
export const SET_AVATAR = "network/profile/SET_AVATAR";
export const RESET_PROFILE = "network/profile/RESET_PROFILE";

const initialState = {
  aboutMe: "",
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: "",
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: "",
  fullName: "",
  userId: null,
  photos: {
    small: "",
    large: "",
  },
};

export const profile_ = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      return { 
        ...state,
        ...payload,  
      };
    case SET_AVATAR:
      return {
        ...state,
        photos: { ...payload }
      }
    case RESET_PROFILE:
      return initialState
    default:
      return state;
  }
};
