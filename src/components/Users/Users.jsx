import React, { Component } from "react";
import logo from "../../images/man.png";
import styles from "./Users.module.css";
import classnames from "classnames";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  handleViewUsers = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <>
        <div className={styles.wrapper__handle}>
          <div className={styles.handle__sort}>HANDLE SORT SEARCH</div>
          <div className={styles.handle__view} onClick={this.handleViewUsers}>
            []
          </div>
        </div>
        
        <div className={styles.users}>
          <div className={styles.users__wrap}>
            {this.props.users.map((i) => {
              return (
                <div className={classnames(styles.user, this.state.flag? styles.next_view: null)}>
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
      </>
    );
  }
}

export default Users;
