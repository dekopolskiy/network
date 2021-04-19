import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Profile from "./Profile";
import { getProfile, getStatus, setProfile } from "../../redux/thunks_creator";
import { reset_profile } from "../../redux/actions_creator";

class ProfileContainer extends Component {

  render() {
    if (!this.props.authorize) {
      return <Redirect to="/login" />;
    }

    return <Profile {...this.props} />;
  }
}


const mapStateToProps = (state) => {
  return {
    authorize: state.current_user_.authorize,
    userID: state.current_user_.current_user.id,
    profile: state.profile_,
    status: state.status_.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset_profile: () => dispatch(reset_profile()),
    getProfile: (userID, handleLoad) => dispatch(getProfile(userID, handleLoad)),
    setProfile: (values, { setErrors, setSubmitting }) => dispatch(setProfile(values, { setErrors, setSubmitting })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
