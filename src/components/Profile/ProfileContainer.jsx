import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Profile } from "./Profile";
import { getProfile, getStatus } from "../../redux/thunks_creator";

class ProfileContainer extends Component {
  render() {
    // if (this.props.message) {
    //   return <Redirect to="/login" />;
    // }
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.error_.message,
    userID: state.current_user_.current_user.id,
    profile: state.profile_,
    status: state.status_.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (userID) => dispatch(getProfile(userID)),
    getStatus: (userID) => dispatch(getStatus(userID)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
