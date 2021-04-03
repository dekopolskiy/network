import React, { Component } from "react";
import sortUp from "../../images/sortUp.png";
import sortDown from "../../images/sortDown.png";
import logo from "../../images/man.png";
import view_grid_4 from "../../images/thumb4.png";
import view_grid_9 from "../../images/thumb9.png";
import search from "../../images/search2.jpg";
import  PagePanelContainer  from "./PagePanel/PagePanelContainer";
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
        <div className={styles.wrapper__handle}>
          {/*________VIEW SELECT____________ */}
          <div className={styles.wrapper__leftside__control}>
            <div
              className={styles.handle__view}
              onClick={this.handleViewChange}
            >
              {flags.isChangeView ? (
                <img src={view_grid_4} width="17" />
              ) : (
                <img src={view_grid_9} width="17" />
              )}
            </div>
            {/*________SORT____________ */}
            <div onClick={() => this.sortUsers("sortDown")}>
              <img src={sortDown} alt="sortDown" width="17" />
            </div>
            <div onClick={() => this.sortUsers("sortUp")}>
              <img src={sortUp} alt="sortUp" width="17" />
            </div>
          </div>
          <div className={styles.wrapper__rightside__control}>
          {/*________SEARCH____________ */}
          <div className={styles.handle__search}>
              <img src={search} width="20" />
              <input
                type="text"
                onChange={this.searchUsers}
                placeholder="Search by name"
              />
            </div>

          {/*_______PAGINATOR____________ */}
          <PagePanelContainer/>
        </div>
        </div>
        <div className={styles.users}>
          {/*________USERS____________ */}
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
                      width="200"
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
