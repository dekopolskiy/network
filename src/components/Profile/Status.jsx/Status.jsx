import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getStatus, setStatus } from '../../../redux/thunks_creator'
import styles from "./Status.module.css"

const Status = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        props.getStatus(props.userID);
    }, [])

    const handleChange = (e) => {
        e.persist();
        setStatus(e.target.value)
    }

    const enableToEdit = () => {
        setIsEdit(true);
    }

    const handleBlur = () => {
        setIsEdit(false);
        props.setStatus(status)
    }

        return (
            <>
                {isEdit ?
                    <input
                        className={styles.status_input}
                        autoFocus={true}
                        name='status'
                        onChange={handleChange}
                        value={status}
                        onBlur={handleBlur}
                    />
                    :
                    <div
                        className={styles.status}
                        onClick={enableToEdit}
                    >{props.status}
                    </div>
                }
            </>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatus: (userID) => dispatch(getStatus(userID)), 
        setStatus: (status) => dispatch(setStatus(status)),
    }
}
export default connect(null, mapDispatchToProps)(Status);


