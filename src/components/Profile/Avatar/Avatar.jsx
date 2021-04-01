import React, { Component } from "react";
import styles from "./Avatar.module.css";
import man from "../../../images/man.png";
import Button from "../../../css/Button/Button";

class Avatar extends Component {
  render() {
    return (
      <>
        <div className={styles.avatar}>
          <img width="250" src={this.props.photo ? this.props.photo : man} />
          <br></br>
        </div>
        <Button color="rgb(33, 153, 33)">Upload image</Button>
      </>
    );
  }
}

export default Avatar;
