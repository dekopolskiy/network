import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";

export class Profile extends Component {
  componentDidMount() {
    this.props.get_profile(this.props.userID);
  }

  render() {
    const { photos, fullName, aboutMe, lookingForAJobDescription, contacts } = this.props.profile;
    return (
      <div className={styles.container}>
        <div className={styles.list_info}>
          <NavLink to="/profile">My Profile</NavLink>
        </div>
        <div className={styles.avatar}>
          <img src={photos.large} />
          <br></br>
          <button>Change photo</button>
        </div>
        <div className={styles.wrap__info}>
          <div className={styles.fullname}>{fullName}</div>
          <div className={styles.status}>status</div>
          <div className={styles.profile_info}>
            {aboutMe}
            {lookingForAJobDescription}
            {Object.keys(contacts).map( i => {
              return <div>{i}: {contacts[i]? contacts[i] : 'empty'}</div>
            })}
          </div>
        </div>
      </div>
    );
  }
}
