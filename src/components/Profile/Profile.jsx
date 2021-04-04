import React, { Component } from "react";
import Avatar from "./Avatar/Avatar";
import InfoForm from "./Info/Form/InfoForm";
import Info from "./Info/Info";
import styles from "./Profile.module.css";
import Status from "./Status.jsx/Status";
import Posts from "./Posts/Posts";
import Settings from "./Settings/Settings";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
    };
  }

  componentDidMount() {
    this.props.getProfile(this.props.userID);
  }

  handleForm = (flag) => {
    this.setState({ isEnable: flag });
  };

  render() {
    const {
      profile: { photos, fullName, aboutMe,
        lookingForAJobDescription, contacts, }, status, setProfile } = this.props;
        
    return (
      <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.profile__info}>
              {/* <Status userID={this.props.userID}/> */}
              <Avatar photo={photos.large} />
              <Settings handleForm={this.handleForm}/>
              <Info fullName={fullName} aboutMe={aboutMe} lookingForAJobDescription={lookingForAJobDescription}
                contacts={contacts} handleForm={this.handleForm}/>
            </div>
            {this.state.isEnable ? 
            <InfoForm {...this.props.profile} handleForm={this.handleForm} setProfile={setProfile}/>
            : 
            <Posts />
            }
            <div className={styles.profile__category}>Category</div>
          </div>
      </div>
    );
  }
}
