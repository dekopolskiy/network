import React, { Component } from "react";
import styles from "./Avatar.module.css";
import man from "../../../images/man.png";
import { Loading } from "../../Loading/Loading"

class Avatar extends Component {
  render() {
    if(!this.props.photo) {
      return <Loading/>
    }
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
