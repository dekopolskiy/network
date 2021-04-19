import React, { useState, useEffect } from "react";
import Avatar from "./Avatar/Avatar";
import InfoForm from "./Info/Form/InfoForm";
import Info from "./Info/Info";
import styles from "./Profile.module.css";
import Status from "./Status.jsx/Status";
import Posts from "./Posts/Posts";
import Settings from "./Settings/Settings";
import { Loading } from "../Loading/Loading";

const Profile = ({ getProfile, userID, reset_profile, profile, status, setProfile }) => {
  const [isForm, setIsForm] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
  useEffect(() => {
    getProfile(userID);
    setLoadPage(true);
    return () => {
      reset_profile();
    }
  }, [])

  const { aboutMe, photos: { large }, fullName, lookingForAJobDescription, contacts } = profile;
  const handleForm = () => {
    setIsForm(!isForm);
  }

  if (!loadPage) {
    return <Loading />
  }
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profile__info}>
          <Status status={status} userID={userID} />
          <Avatar photo={large} />
          <Settings handleForm={handleForm} />
          <Info fullName={fullName} aboutMe={aboutMe} lookingForAJobDescription={lookingForAJobDescription}
            contacts={contacts} handleForm={handleForm} />
        </div>
        {isForm ?
          <InfoForm {...profile}
            handleForm={handleForm}
            setProfile={setProfile} />
          :
          <Posts />
        }
        <div className={styles.profile__category}>
          <h2>Category</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;


