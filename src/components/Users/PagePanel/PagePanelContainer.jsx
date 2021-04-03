import React, { Component } from 'react'
import { connect } from 'react-redux'
import PagePanel from './PagePanel'
import { getUsers } from "../../../redux/thunks_creator"

class PagePanelContainer extends Component {
    render() {
        return (
            <PagePanel {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    pageInfo: state.users_.pageInfo,
})

const mapDispatchToProps = (dispatch) => {
    return { 
        getUsers: (page, count) => dispatch(getUsers(page, count)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePanelContainer);
