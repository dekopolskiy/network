import React, { Component } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/swift.png";
import { connect } from "react-redux";
import { logout } from "../../redux/thunks_creator";


class Header extends Component {
  render() {
    const { userID, logout } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}><h1>I F E</h1></div>
          <div className={styles.nav}>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/'>Search</NavLink>
            {userID? <div onClick={logout} className={styles.logout}>Logout</div>  
             : <NavLink to='/login' className={styles.sign_in}>Sign in</NavLink>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userID: state.current_user_.current_user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);