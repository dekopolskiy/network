import React from "react";
import styles from "./PagePanel.module.css";
import { useState, useEffect } from "react";

const PagePanel = ({ totalCountUsers, usersOnPage, setCurrentPage }) => {
  const [step, setStep] = useState({ left: 0, right: 5 });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const pagesLength = Math.ceil(totalCountUsers / usersOnPage);

  useEffect(() => {
    let allPages = [];
    for (let i = 1; i <= pagesLength; i++) {
      allPages.push(i);
    }
    setPages(allPages);
  }, [usersOnPage]);

  useEffect(() => {
      setCurrentPage(page);
  }, [page]);

  const pagesMove = (stepValue) => {
    if (stepValue == -5 && step.left == 0) {
      return null;
    }
    if (stepValue == 5 && step.right > pagesLength) {
      return null;
    }
    setStep({ left: step.left + stepValue, right: step.right + stepValue });
  };

  return (
    <div className={styles.pagePanel}>
      <div>First</div>
      <div className={styles.left} onClick={() => pagesMove(-5)}>
        Prev
      </div>
      {pages
      .slice(step.left, step.right)
      .map((i) => (
        <div key={i} onClick={()=>setPage(i)}>{i}</div>
      ))}
      <div className={styles.right} onClick={() => pagesMove(5)}>
        Next
      </div>
      <div>Last</div>
    </div>
  );
};

export default PagePanel;
