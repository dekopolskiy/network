export const SET_PROFILE = "network/profile/SET_PROFILE";

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
      return { ...state, ...payload };

    default:
      return state;
  }
};
