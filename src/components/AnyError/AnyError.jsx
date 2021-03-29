import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class AnyError extends Component {
  render() {
    return <div>{this.props.message.match(/Error: (.+)/i)[1]}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.error_.message,
  };
};

export default connect(mapStateToProps, null)(AnyError);
