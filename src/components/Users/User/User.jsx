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
