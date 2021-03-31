import React, { Component } from 'react'
import styles from "../Profile.module.css";


class Avatar extends Component {
    render() {
        return (
            <div className={styles.avatar}>
                <img src={this.props.photo} />
                <br></br>
                <button>Change photo</button>
            </div>
        )
    }
}


export default Avatar;