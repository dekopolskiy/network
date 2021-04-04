import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AnyError.module.css";
class AnyError extends Component {
  render() {
    return <div className={styles.anyError}>
      <div className={styles.anyError__error}>
        {this.props.message}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.error_.message,
  };
};

export default connect(mapStateToProps, null)(AnyError);
