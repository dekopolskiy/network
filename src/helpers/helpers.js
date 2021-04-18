import { disable_progress_subscribe, enable_progress_subscribe, get_status, set_error, set_status } from "../redux/actions_creator";
import { httpReq } from "../RestAPI/axios";

export const handleSurbscribe = ({ dispatch, id, set_follow, set_unfollow, follow }) => {
    dispatch(enable_progress_subscribe({ id }));
    httpReq.subscribe[follow ? 'follow' : 'unfollow'](id)
        .then(({ data: { resultCode } }) => {
            if (resultCode === 0) {
                dispatch((follow ? set_follow : set_unfollow)(id));
                dispatch(disable_progress_subscribe({ id }));
            }
        })
}

export const handleStatus = ({ statusGet, userID, status, dispatch, set_status, set_error }) => {
    const { get_status: get_statusAPI, set_status: set_statusAPI } = httpReq.status;
    (statusGet ? get_statusAPI(userID) : set_statusAPI(status))
        .then(({ data }) => {
            dispatch(set_status(statusGet ? data : status));
            dispatch(set_error(''));
        })
}

export const handleProfile = ({ profileGet = null, userID, set_profile, dispatch, data: profileData = null }) => {
    const { get_profile: getProfileAPI, set_profile: setProfileAPI } = httpReq.profile;

    return (profileGet ? getProfileAPI(userID) : setProfileAPI(profileData))

        .then(({ data }) => {
            if (data.resultCode && data.resultCode === 0) {
                dispatch(set_profile(profileData));
            } else {
                dispatch(set_profile(data))
            }
                dispatch(set_error(''));
        })
}

