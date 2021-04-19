import React, { Component, useState, useEffect } from "react";
import sortUp from "../../../images/sort-up2.png";
import sortDown from "../../../images/sort-down2.png";

const Sort = (props) => {
  const [isSortSwitch, setIsSortSwitch] = useState(false);

    return (
      <>
        {isSortSwitch ? (
          <div onClick={() => { 
            setIsSortSwitch(false);
            props.sortUsers("sortDown");
            }}>
            <img src={sortDown} alt="sortDown" width="15" />
          </div>
        ) : (
          <div onClick={() => {
            setIsSortSwitch(true)  
            props.sortUsers("sortUp")
             }}>
            <img src={sortUp} alt="sortUp" width="15" />
          </div>
        )}
      </>
    );
}

export default Sort;
