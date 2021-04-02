import React, { Component } from "react";
import styles from "./Avatar.module.css";
import man from "../../../images/man.png";
import Button from "../../../css/Button/Button";

class Avatar extends Component {
  render() {
    return (
      <>
        <div className={styles.avatar}>
          <img width="150" src={this.props.photo ? this.props.photo : man} />
        </div>
      </>
    );
  }
}

export default Avatar;
