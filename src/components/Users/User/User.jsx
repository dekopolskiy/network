<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Button from "../../../css/Button/Button";
import styles from "./User.module.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfile } from "../../../redux/thunks_creator";
import logo from "../../../images/man.png";

class User extends Component {
    componentDidMount() {
        const userID = this.props.match.params.id;
        this.props.getProfile(userID);
    }

    render() {
        const { photos: { large }, fullName } = this.props.profile;
        return (
            <div className={styles.user}>
                <h2>{this.props.profile.fullName}</h2>
                <img src={large ? large : logo} alt="empty" width='225'/>
                <Button color='#446699' width='70'>follow</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile_,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userID) => {
            dispatch(getProfile(userID));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(User);
>>>>>>> d9e2972d7907ded1cdbfa5477cb8dd48a49bbd65
