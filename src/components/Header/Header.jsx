import React, { Component } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/swift.png";


export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}><h1>I F E</h1></div>
          <div className={styles.nav}>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/'>Contacts</NavLink>
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </div>
        </div>
      </div>
    );
  }
}