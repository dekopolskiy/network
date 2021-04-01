import React from 'react'
import styles from "./FormInfoProfile.module.css";

export const createField = (Component, fieldname, props) => {
    return (
        <div className={styles.field}>
            <div>{fieldname}</div>
            <Component {...props} />
        </div>
    )
}
