import React, { Component } from "react";
import styles from "./Info.module.css";

class Info extends Component {
  render() {
    const { aboutMe, lookingForAJobDescription, contacts, fullName } = this.props;
    return (
      <div className={styles.info}>
        <div className={styles.info__name}><h3>{fullName}</h3></div>
        <div className={styles.info__aboutMe}>{aboutMe}</div>
        <div className={styles.info__contacts}><h3>Contacts info</h3>
          {Object.keys(contacts).map((i) => {
            return <div key={i}>
              {i}: <br></br>{contacts[i]}
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Info;
