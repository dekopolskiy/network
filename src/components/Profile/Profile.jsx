import React, { Component } from "react";
import Avatar from "./Avatar/Avatar";
import InfoForm from "./Info/Form/InfoForm";
import Info from "./Info/Info";
import styles from "./Profile.module.css";
import Status from "./Status.jsx/Status";
import Posts from "./Posts/Posts";
import Settings from "./Settings/Settings";
import { Loading } from "../Loading/Loading";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm: false,
      loadPage: false,
    };
  }

  handleForm = () => {
    this.setState({ isForm: !this.state.isForm })
  }

  componentDidMount() {
    this.props.getProfile(this.props.userID);
  }

<<<<<<< HEAD
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.profile !== this.props.profile) {
=======
  componentDidUpdate( prevProp, prevState ) {
    if(prevProp.profile !== this.props.profile) {
>>>>>>> d9e2972d7907ded1cdbfa5477cb8dd48a49bbd65
      this.setState({ loadPage: true })
    }
  }

  componentWillUnmount() {
    this.props.reset_profile()
  }

  render() {
    if (!this.state.loadPage) {
      return <Loading />
    }
    
    const {
<<<<<<< HEAD
      profile: { photos: { large }, fullName, aboutMe,
        lookingForAJobDescription, contacts, }, status, setProfile } = this.props;
=======
      profile: { photos, fullName, aboutMe,
        lookingForAJobDescription, contacts, userId}, status, setProfile } = this.props;

    if( userId !== this.props.userID ) { 
      return null 
    } //other User don`t render
    
>>>>>>> d9e2972d7907ded1cdbfa5477cb8dd48a49bbd65
    return (
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profile__info}>
            <Status status={status} userID={this.props.userID}/>
            <Avatar photo={large} />
            <Settings handleForm={this.handleForm} />
            <Info fullName={fullName} aboutMe={aboutMe} lookingForAJobDescription={lookingForAJobDescription}
              contacts={contacts} handleForm={this.handleForm} />
          </div>
          {this.state.isForm ?
            <InfoForm {...this.props.profile} 
            handleForm={this.handleForm} 
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
}
export default Profile;


