import React from 'react'
import styles from "./PagePanel.module.css";
import { useState, useEffect } from "react";

const PagePanel = ({ totalCountUsers, usersOnPage }) => {
    const [step, setStep] = useState({ left: 0, right: 10 })
    const [pages, setPages] = useState([]);
    const pagesLength = Math.ceil(totalCountUsers/usersOnPage);
    
    useEffect(() => {
        let allPages = [];
        for (let i = 1; i <= pagesLength; i++) {
            allPages.push(i);
        }
        setPages(allPages)
    }, [totalCountUsers])

    const pagesMove = (leftRight) => {
        if (leftRight == -10 && step.left == 0) { return null }
        if (leftRight == 10 && step.right > pagesLength) { return null }
        setStep({ left: step.left + leftRight, right: step.right + leftRight });
    }

    return (
        <div className={styles.pagePanel}>
            <div className={styles.left}
                onClick={() => pagesMove(-10)}>L</div>
            {pages.slice(step.left, step.right).map(i => <div key={i}>{i}</div>)}
            <div className={styles.right} onClick={() => pagesMove(10)}>R</div>
        </div>
    )
}


export default PagePanel;