import React, { Component } from 'react';
import { setAvatar } from "../../../redux/thunks_creator";
import settings from "../../../images/setting.png";
import upload from "../../../images/upload.png";
import edit from "../../../images/edit.png";
import styles from "./Settings.module.css";
import { connect } from 'react-redux';

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref : React.createRef(),             
        }
    }
    
    handleFileUpload = () => {
        this.state.ref.current.click();
    }
    fileUpload = (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        this.props.setAvatar(formData);
    }

    render() {
        return (
            <div className={styles.info__settings}>
                <img src={edit} 
                className={styles.settings__item} 
                onClick={() => this.props.handleForm(true)} />
                <img src={settings} 
                className={styles.settings__item} 
                onClick={() => this.props.handleForm(true)} />
                <img src={upload} 
                className={styles.settings__item} 
                onClick={() => this.handleFileUpload()} />
                <input type='file' ref={this.state.ref} style={{'display': 'none' }} onChange={this.fileUpload}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        setAvatar: ( image ) => {dispatch(setAvatar(image))}
    }
}

export default connect(null, mapDispatchToProps)(Settings)
