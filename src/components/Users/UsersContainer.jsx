import React, { Component } from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers } from "../../redux/thunks_creator" 

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return (
            <div>
                <Users {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        users: state.users_.users, 
    }

}

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);