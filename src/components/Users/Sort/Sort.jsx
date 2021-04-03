import React, { Component } from "react";
import sortUp from "../../../images/sort-up2.png";
import sortDown from "../../../images/sort-down2.png";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSortSwitch: false,
    };
  }

  render() {
    return (
      <>
        {this.state.isSortSwitch ? (
          <div onClick={() => {
            this.setState({isSortSwitch: false}) 
            this.props.sortUsers("sortDown")
            }}>
            <img src={sortDown} alt="sortDown" width="15" />
          </div>
        ) : (
          <div onClick={() => {
            this.setState({isSortSwitch: true})  
            this.props.sortUsers("sortUp")
             }}>
            <img src={sortUp} alt="sortUp" width="15" />
          </div>
        )}
      </>
    );
  }
}

export default Sort;
