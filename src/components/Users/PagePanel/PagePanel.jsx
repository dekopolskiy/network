import React from "react";
import styles from "./PagePanel.module.css";
import { useState, useEffect } from "react";

const PagePanel = ({ pageInfo : { totalCount, usersOnPage = 20, currentPage = 1 } , getUsers }) => {
  const [pages, setPages] = useState([]);
  const pagesLength = Math.ceil(totalCount / usersOnPage);
  const [step, setStep] = useState({ left: 0, right: 5 });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    let allPages = [];
    for (let i = 1; i <= pagesLength; i++) {
      allPages.push(i);
    }
    setPages(allPages);
  }, [usersOnPage]);

  useEffect(() => {
    if(currentPage === page ) {
      return null;
    }
      getUsers({page, perPage})
  }, [page]);

  
  useEffect(() => {
    if(perPage === usersOnPage) {
      return null;
    }
    getUsers({page, perPage});
  }, [perPage])

  const pagesMove = (stepValue) => {
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
    if(pageValue === page) return null;
    setPage(pageValue);
  }
  
  return (
    <div className={styles.pagePanel}>
      <div onClick={ () => changePage(1) }>First</div>
      <div className={styles.left} onClick={ () => pagesMove(-5) }>
        Prev
      </div>
      {pages
      .slice(step.left, step.right)
      .map((i) => (
        <div key={i}
        className={currentPage === i? styles.current: null } 
        onClick={ () => setPage(i) }>{i}</div>
      ))}
      <div className={styles.right} onClick={ () => pagesMove(5) }>
        Next
      </div>
      <div onClick={ () => changePage(pagesLength) }>Last</div>
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
