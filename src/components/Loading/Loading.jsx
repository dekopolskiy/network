import React from 'react'
import styles from "./Loading.module.css";
import { useState, useEffect } from "react";
import cn from 'classnames';

export const Loading = ( ) => {
    const [value, setValue] = useState(false);

    useEffect(() => {
        let timer = setInterval(()=>setValue(!value), 700)
        return () => {
            clearInterval(timer);
        }
    }, [value])

    return (
        <div className={cn(styles.loading, value? styles.line: null)}>
            Loading...
        </div>
    )
}
