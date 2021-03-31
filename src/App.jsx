import styles from "./App.module.css";
import React from "react";
import { Route } from "react-router";
import AnyError from "./components/AnyError/AnyError";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Loading } from './components/Loading/Loading';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

export default class App extends React.Component {
  componentDidMount() {
    this.props.toAuthorize();
  }

  render() {
    if (!this.props.isLoad) {
      return <Loading />;
    }
    return (
      <div className={styles.main__wrap}>{/*flex column 0 1 0 */}
        <Header />
        <div className={styles.content__wrap}>
          <Route exact path="/error" component={AnyError} />
          <Route exact path="/" component={ProfileContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users" component={UsersContainer} />
        </div>
        <Footer />
      </div>
    );
  }
}
