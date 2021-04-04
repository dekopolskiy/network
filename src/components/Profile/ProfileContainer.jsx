import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import   Profile   from "./Profile";
import { getProfile, getStatus, setProfile } from "../../redux/thunks_creator";
import { withLoading } from "../../hoc/withLoading";
import { compose } from "redux";

class ProfileContainer extends Component {
  render() {
    if (this.props.message) { //WORK
      return <Redirect to="/login" />;
    }
    return <Profile {...this.props}/>;
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
    getProfile: (userID, handleLoad) => dispatch(getProfile(userID, handleLoad)),
    setProfile: (data, setErrors, setSubmitting) => dispatch(setProfile(data, setErrors, setSubmitting)),
  }
};

const enhance =  compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)

export default enhance(ProfileContainer)
