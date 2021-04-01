import React, { Component } from "react";
import Avatar from "./Avatar/Avatar";
import FormInfoProfile from "./Info/Form/FormInfoProfile";
import Info from "./Info/Info";
import styles from "./Profile.module.css";
import Status from "./Status.jsx/Status";
import Post from "./Post/Post";
import Button from "../../css/Button/Button";

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnable: false,
    }
  }

  componentDidMount() {
    this.props.getProfile(this.props.userID);
    this.props.getStatus(this.props.userID);
  }

  handleForm = (flag) => {
    this.setState({ isEnable: flag })
  }

  render() {
    const { profile: { photos, fullName, aboutMe, lookingForAJobDescription, contacts }, status } = this.props;
    return (
      <div className={styles.container__main}>
        {this.state.isEnable ?
          <FormInfoProfile {...this.props.profile} handleForm={this.handleForm} />
          :
          <div className={styles.main__wrap}>
            <div className={styles.container__info__photo}>
              <Avatar photo={photos.large} />
              <div>{fullName}</div>
              <Status status={status} />
              <Info aboutMe={aboutMe}
                lookingForAJobDescription={lookingForAJobDescription}
                contacts={contacts} />
                <Button 
                color='rgb(86, 158, 52)'
                onClick={() => this.handleForm(true)}>Edit profile</Button>
            </div>
            <Post />
          </div>
        }
      </div>
    );
  }
}
