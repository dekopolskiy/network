import styles from "./App.module.css";
import React from "react";
import { Route, Switch } from "react-router";
import AnyError from "./components/AnyError/AnyError";
import  Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Loading } from './components/Loading/Loading';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import User from "./components/Users/User/User";

export default class App extends React.Component {
  componentDidMount() {
    this.props.toAuthorize();
  }

  render() {
    if (!this.props.isLoad) {
      return null;
    }
    return (
      <div className={styles.main__wrap}>{/*flex column 0 1 0 */}
        <Header />
        {this.props.error? <AnyError/>: null}
        <div className={styles.content__wrap}>
          <Switch>
          <Route exact path="/" component={ProfileContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/users" component={UsersContainer} />
          <Route path="/users/:id" component={User} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

/*
Switch
  <Route profile/id />
  <Route profile/ />
Switch
*/