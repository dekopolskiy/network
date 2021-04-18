import React, { Component } from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { getProfile } from "../../../redux/thunks_creator";
import { reset_profile } from "../../../redux/actions_creator"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
             load: false,
        }
    }
    
  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.reset_profile()
  }

  render() {
    return <div>
        <h1>{this.props.profile.fullName}</h1>
        <img src={this.props.profile.photos.large} alt="empty"/>
        <div>{Object.entries(this.props.profile.contacts).map(([i, y]) => {
              return <div key={i}>{i} : {y? y : 'empty'}</div>
        })}</div>
    </div>
  }
}

const mapStateToProps = (state) => ({
    profile: state.profile_,
})

const mapDispatchToProps = {
    getProfile,
    reset_profile,
}

export default compose( withRouter, connect(mapStateToProps, mapDispatchToProps))(User);
