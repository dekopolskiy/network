import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStatus } from '../../../redux/thunks_creator'
import styles from "./Status.module.css"

class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            status: this.props.status,
        }
    }

    componentDidUpdate(prevPR, prevST) {
        if (prevPR !== this.props) {
            this.setState({ status: this.props.status })
        }
    }
    handleChange = (e) => {
        e.persist();
        this.setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    enableToEdit = () => {
        this.setState({ isEdit: true });
    }

    handleBlur = () => {
        this.setState({ isEdit: false });
        this.props.setStatus(this.state.status)
    }

    render() {
        return (
            <>
                {this.state.isEdit ?
                    <input
                        autoFocus={true}
                        name='status'
                        onChange={this.handleChange}
                        value={this.state.status}
                        onBlur={this.handleBlur}
                    />
                    :
                    <div
                        className={styles.status}
                        onClick={this.enableToEdit}
                    >{this.props.status}
                    </div>
                }
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (status) => dispatch(setStatus(status)),
    }
}
export default connect(null, mapDispatchToProps)(Status);


