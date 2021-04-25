import React from "react";
import styles from "./PagePanel.module.css";
import { useState, useEffect, useMemo } from "react";

const PagePanel = ({ pageInfo: { totalCount, usersOnPage = 20, currentPage = 1 }, getUsers }) => {
  const pagesLength = Math.ceil(totalCount / usersOnPage);
  const [step, setStep] = useState({ left: 0, right: 5 });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  let allPages = useMemo(() => {
    let all = [];
    for (let i = 1; i <= pagesLength; i++) {
      all.push(i);
    }
    return all;
  }, [usersOnPage]);

  useEffect(() => {
    if (currentPage === page) { //all http disabled
      return null;
    }
    getUsers({ page, perPage })
  }, [page]);//next page


  useEffect(() => {
    if (perPage === usersOnPage) { //all http disabled
      return null;
    }
    getUsers({ page, perPage });
  }, [perPage]) //set users on Page

  const pagesMove = (stepValue) => {
    debugger
    if (stepValue == -5 && step.left == 0) {
      return null;
    }
    if (stepValue == 5 && step.right > pagesLength) {
      return null;
    }
    setStep({ left: step.left + stepValue, right: step.right + stepValue });
  };

  const handleSelect = (e) => {
    e.persist();
    setPerPage(e.target.value)
  }

  const changePage = (pageValue) => {
    if (pageValue === page) return null;
    setPage(pageValue);
  }

  return (
    <div className={styles.pagePanel}>
      <div onClick={() => pagesMove(-step.left)}>First</div>
      <div className={styles.left} onClick={() => pagesMove(-5)}>
        Prev
      </div>
      {allPages
        .slice(step.left, step.right)
        .map((i) => (
          <div key={i}
            className={currentPage === i ? styles.current : null}
            onClick={() => setPage(i)}>{i}</div>
        ))}
      <div className={styles.right} onClick={() => pagesMove(5)}>
        Next
      </div>
      <div onClick={() => pagesMove(pagesLength-step.right)}>Last</div>
      <div className={styles.select}>
        <select name="" id="" onChange={handleSelect}>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default PagePanel;
