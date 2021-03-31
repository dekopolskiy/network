import React, { Component } from 'react'
import styles from "../Profile.module.css";


class Info extends Component {
    render() {
        const { aboutMe, lookingForAJobDescription, contacts } = this.props;
        return (
            <div className={styles.profile_info}>
            <h3>About me</h3>
            {aboutMe}
            {lookingForAJobDescription}
            <h3>Contacts</h3>
                {Object.keys(contacts).map(i => {
                    return <div key={i}>{i}: {contacts[i] ? contacts[i] : 'empty'}</div>
                })}

            </div>
        )
    }
}

export default Info;