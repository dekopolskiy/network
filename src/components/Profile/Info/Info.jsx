import React, { Component } from "react";
import styles from "./Info.module.css";
import Button from "../../../css/Button/Button";

class Info extends Component {
  render() {
    const { aboutMe, lookingForAJobDescription, contacts, fullName } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.profile_info}>
          <h3>{fullName}</h3>
          {aboutMe}
          {lookingForAJobDescription}
          {Object.keys(contacts).map((i) => {
            return contacts[i] ? (
              <div key={i} className={styles.contacts}>
                {i}: {contacts[i]}
              </div>
            ) : null;
          })}
          <Button
            color="#446699"
            onClick={() => this.props.handleForm(true)}
          >
            Edit profile
          </Button>
          <Button
            color="#446600"
            onClick={() => this.props.handleForm(true)}
          >
            Upload Avatar
          </Button>
        </div>
      </div>
    );
  }
}

export default Info;
