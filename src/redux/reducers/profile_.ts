export const SET_PROFILE = "network/profile/SET_PROFILE";
export const SET_AVATAR = "network/profile/SET_AVATAR";
export const RESET_PROFILE = "network/profile/RESET_PROFILE";

export type ProfileType = {
  aboutMe: string,
  contacts: ContactsType,
  lookingForAJob: null | boolean,
  lookingForAJobDescription: null | string,
  fullName: null | string,
  userId: null | number,
  photos: PhotosType,
};

export type ContactsType = {
  facebook: null | string,
  website: null | string,
  vk: null | string,
  twitter: null | string,
  instagram: null | string,
  youtube: null | string,
  github: null | string,
  mainLink: null | string,
}

export type PhotosType = {
  small: null | string,
  large: null | string,
}


const initialState: ProfileType = {
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

export const profile_ = (state: ProfileType = initialState, { type, payload }: { type: string, payload: any }): ProfileType => {
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
