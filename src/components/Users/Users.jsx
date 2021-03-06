import React, { useState, useEffect } from "react";
import logo from "../../images/man.png";
import PagePanelContainer from "./PagePanel/PagePanelContainer";
import styles from "./Users.module.css";
import classnames from "classnames";
import SwitchView from "./SwitchView/SwitchView";
import Sort from "./Sort/Sort";
import Search from "./Search/Search";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const [isChangeView, setIsChangeView] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(props.users);
  }, [props.users])

  const handleViewChange = () => {
    setIsChangeView(!isChangeView);
  };

  const searchUsers = (e) => {
    let regexp = new RegExp(`^${e.target.value}`, "gi");
    setUsers(props.users.filter((i) => String(i.name).match(regexp)));
  };

  const sortUsers = (param) => {
    const sort = {
      sortUp: (a, b) => (a.id > b.id ? 1 : -1),
      sortDown: (a, b) => (a.id > b.id ? -1 : 1),
    };

    setUsers([...props.users.sort(sort[param])]);
  };

  const { ids: idsInProgress } = props.followUsers;
  return (
    <div className={styles.container}>
      <div className={styles.сontrolPanel}>
        <div className={styles.controlPanel__leftside}>
          <SwitchView handleViewChange={handleViewChange} isChangeView={isChangeView} />
          <Sort sortUsers={sortUsers} />
        </div>
        <div className={styles.controlPanel__rightside}>
          <div className={styles.rightside__search}>
            <Search searchUsers={searchUsers} />
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
                  isChangeView ? styles.new_width : null
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
                  <div>Status: {i.status ? i.status : "empty"}</div>
                </NavLink>
                {i.followed ?
                  <button className={styles.buttonUnfollow}
                    disabled={idsInProgress.some((id) => id === i.id)}
                    onClick={() => props.unfollow(i.id)}>
                    unfollow
                    </button> :
                  <button className={styles.buttonFollow}
                    disabled={idsInProgress.some((id) => id === i.id)}
                    onClick={() => props.follow(i.id)}>
                    follow
                    </button>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Users;
