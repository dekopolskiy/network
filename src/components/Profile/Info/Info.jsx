import React, { Component } from 'react'
import styles from "./Info.module.css";

class Info extends Component {

    render() {
        const { aboutMe, lookingForAJobDescription, contacts } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.profile_info}>
                    {aboutMe}
                    {lookingForAJobDescription}
                    {Object.keys(contacts).map(i => {
                        return contacts[i] ?
                            <div key={i} className={styles.contacts}>{i}: {contacts[i]}</div>
                            : null;
                    })}
                </div>
            </div>
        )
    }
}

export default Info;

