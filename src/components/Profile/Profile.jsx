import React, { Component } from "react";
import styles from "./Profile.module.css";

export class Profile extends Component {
  componentDidMount() {
    this.props.get_profile(this.props.userID)
  }

  render() {
    const { photos, fullName } = this.props.profile;
    return (
      <div className={styles.container}>
        <div className={styles.list_info}>LIStLIStLIStLISt</div>
        <div className={styles.avatar}>
          <img src={photos.large}/><br></br>
          <button>Change photo</button>
        </div>
        <div className={styles.wrap__info}>
          <div className={styles.fullname}>{fullName}</div>
          <div className={styles.status}>status</div>
          <div className={styles.profile_info}>info</div>
        </div>
      </div>
    );
  }
}
