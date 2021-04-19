import React, { Component } from 'react'
import view_grid_4 from "../../../images/thumb4.png";
import view_grid_9 from "../../../images/thumb9.png";


const SwitchView = (props) => {
  return (
    <div
      onClick={props.handleViewChange}
    >
      {props.isChangeView ? (
        <img src={view_grid_4} width="17" />
      ) : (
        <img src={view_grid_9} width="15" />
      )}
    </div>
  )
}

export default SwitchView
