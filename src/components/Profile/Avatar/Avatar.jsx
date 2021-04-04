import React, { Component } from "react";
import styles from "./Avatar.module.css";
import {Loading} from "../../../components/Loading/Loading"

class Avatar extends Component {
  render() {
    return (
        <div className={styles.avatar}>
          { this.props.photo?
          <img width="150" src={this.props.photo} />: null}         
          </div>
    );
  }
}

export default Avatar;
