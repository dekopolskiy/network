import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import styles from "./Profile.module.css";
import Status from "./Status.jsx/Status";

export class Profile extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.userID);
    this.props.getStatus(this.props.userID);
  }

  render() {
    const { profile: { photos, fullName, aboutMe, lookingForAJobDescription, contacts }, status } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.list_info}>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </div>
        <div className={styles.wrap__info__photo}>
          <Avatar photo={photos.large} />
          <div className={styles.wrap__info}>
            <div className={styles.fullname}><h3>{fullName}</h3></div>
            <Status status={status} />
            <Info
              aboutMe={aboutMe}
              lookingForAJobDescription={lookingForAJobDescription}
              contacts={contacts}
            />
          </div>
        </div>
      </div>
    );
  }
}
