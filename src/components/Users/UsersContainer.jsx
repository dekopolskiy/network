import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { Loading } from "../Loading/Loading"
import { getUsers } from "../../redux/thunks_creator";
import { compose } from "redux";
import { withRouter } from "react-router";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers({});
    console.log(this.props.match.params.id);
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page) => dispatch(getUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
