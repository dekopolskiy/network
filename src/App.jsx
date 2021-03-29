import styles from "./App.module.css";
import React from "react";
import { Route } from "react-router";
import AnyError from "./components/AnyError/AnyError";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";

export default class App extends React.Component {
  componentDidMount() {
    this.props.toAuthorize();
  }

  render() {
    if (!this.props.isLoad) {
      return <div>...Loading</div>;
    }
    return (
      <div className={styles.main__wrap}>
        <Header />
        <div className={styles.content__wrap}>
          <Route exact path="/error" component={AnyError} />
          <Route exact path="/" component={ProfileContainer} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    );
  }
}
