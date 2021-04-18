import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { Loading } from "../Loading/Loading"
import { follow, getUsers, unfollow } from "../../redux/thunks_creator";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers({});
  }

  render() {
    if (!this.props.users.length) {
      return <Loading/>;
    }
    return <Users {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users_.users,
    followUsers: state.users_.followUsers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page) => dispatch(getUsers(page)),
  follow: (id) => dispatch(follow(id)),
  unfollow: (id) => dispatch(unfollow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
