import React, { Component } from "react";
import logo from "../../images/man.png";
import PagePanelContainer from "./PagePanel/PagePanelContainer";
import styles from "./Users.module.css";
import classnames from "classnames";
import SwitchView from "./SwitchView/SwitchView";
import Sort from "./Sort/Sort";
import Search from "./Search/Search";
import { NavLink, Redirect } from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: {
        isChangeView: false,
      },
      users: [...this.props.users], //for search, after onchange new Array and render
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      //maximum depth  without !==
      this.setState({ users: [...this.props.users] });
    }
  }

  handleViewChange = () => {
    this.setState({ flags: { isChangeView: !this.state.flags.isChangeView } });
  };

  searchUsers = (e) => {
    let regexp = new RegExp(`^${e.target.value}`, "gi");
    this.setState({
      users: this.props.users.filter((i) => String(i.name).match(regexp)),
    });
  };

  sortUsers = (param) => {
    const sort = {
      sortUp: (a, b) => (a.id > b.id ? 1 : -1),
      sortDown: (a, b) => (a.id > b.id ? -1 : 1),
    };

    this.setState({
      users: [...this.props.users.sort(sort[param])],
    });
  };

  render() {
    const { flags, users } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.сontrolPanel}>
          <div className={styles.controlPanel__leftside}>
            <SwitchView handleViewChange={this.handleViewChange} flags={flags} />
            <Sort sortUsers={this.sortUsers} />
          </div>
          <div className={styles.controlPanel__rightside}>
            <div className={styles.rightside__search}>
              <Search searchUsers={this.searchUsers} />
            </div>
            <PagePanelContainer />
          </div>
        </div>
        <div className={styles.listUsers}>
          <div className={styles.listUsers_wrap}>
            {users.map((i) => {
              return (
                <div
                  key={i.id}
                  className={classnames(
                    styles.listUsers__user,
                    flags.isChangeView ? styles.new_width : null
                  )}
                >
                  <NavLink to={"/users/" + i.id}>
                    <div>
                      <img
                        src={i.photos.large ? i.photos.large : logo}
                        width="200"
                        alt="empty"
                      />
                    </div>
                    <h3>{i.name}</h3>
                  id:{i.id}
                    {i.followed}
                    <div>Status: {i.status ? i.status : "empty"}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
