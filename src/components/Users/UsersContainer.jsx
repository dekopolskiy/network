import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { Loading } from "../Loading/Loading"
<<<<<<< HEAD
import { follow, getUsers, unfollow } from "../../redux/thunks_creator";
=======
import { getUsers } from "../../redux/thunks_creator";
import { compose } from "redux";
>>>>>>> d9e2972d7907ded1cdbfa5477cb8dd48a49bbd65

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers({});
  }

  render() {
    if (!this.props.users.length) {
      return <Loading />;
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
