import React, { Component } from "react";
import { connect } from "react-redux";

class AnyError extends Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

const mapStateToProps = (state) => {
    return {
        message : state.error_.message
    }
}

export default connect(mapStateToProps, null)(AnyError);
