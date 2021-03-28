import "./App.css";
import React from "react";
import { Redirect, Route } from "react-router";
import AnyError from "./AnyError/AnyError";

export default class App extends React.Component {
  componentDidMount() {
    this.props.toAuthorize();
  }

  render() {
    if (!this.props.isLoad) {
      return <div>...loading</div>;
    }
    if(this.props.messageError) {
      return <AnyError />
    }
    return (
      <>
        <div>HEADER</div>
        <div>HELLO</div>
        <div>FOOTER</div>
      </>
    );
  }
}
