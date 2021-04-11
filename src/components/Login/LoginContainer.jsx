import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { sign_in } from '../../redux/thunks_creator'
import { Login } from './Login'

class LoginContainer extends Component {
    render() {
        if(this.props.authorize) {
            return <Redirect to='/' />
        }
        return (
            <Login sign_in={this.props.sign_in}
                userID={this.props.userID}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authorize : state.current_user_.authorize
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sign_in: (data) =>  dispatch(sign_in(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
