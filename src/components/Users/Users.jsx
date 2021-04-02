import React, { Component } from "react";
// import { FaSortAmountDown } from "react-icons/fa";
import PagePanel from "./PagePanel/PagePanel";
import logo from "../../images/man.png";
import view_grid_4 from "../../images/grid-view-icon-21.jpg";
import view_grid_6 from "../../images/grid-view-icon-28.jpg";
import search from "../../images/search2.jpg";
// import { FaSortAmountUpAlt } from 'react-icons/fa';
import styles from "./Users.module.css";
import classnames from "classnames";

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
      sortUp: (a, b) => a.id > b.id ? 1 : -1,
      sortDown: (a, b) => a.id > b.id ? -1 : 1,
    }

    this.setState({
      users: [...this.props.users.sort(sort[param])]
    })
  }

  render() {
    const { totalUsersCount, usersOnPage } = this.props;
    const { flags, users } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.handle__search}>
          <img src={search} width="15" />
          <input
            type="text"
            onChange={this.searchUsers}
            placeholder="Search by name"
          />
        </div>

        <div className={styles.wrapper__handle}>
          <div className={styles.handle__view} onClick={this.handleViewChange}>
            {flags.isChangeView ? (
              <img src={view_grid_4} width="25" />
            ) : (
              <img src={view_grid_6} width="30" />
            )}
          </div>
          <div onClick={() => this.sortUsers('sortUp')}>SORTUP</div>
          <div onClick={() => this.sortUsers('sortDown')}>SORTDOWN</div>
          <PagePanel
            totalCountUsers={totalUsersCount}
            usersOnPage={usersOnPage}
          />
        </div>
        <div className={styles.users}>
          <div className={styles.users__wrap}>
            {users.map((i) => {
              return (
                <div
                  key={i.id}
                  className={classnames(
                    styles.user,
                    flags.isChangeView ? styles.next_view : null
                  )}
                >
                  <div>
                    <img
                      src={i.photos.large ? i.photos.large : logo}
                      width="150"
                      alt="empty"
                    />
                  </div>
                  <h3>{i.name}</h3>
                  id:{i.id}
                  {i.followed}
                  <div>Status: {i.status ? i.status : "empty"}</div>
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
