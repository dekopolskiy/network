import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {focus: {}};
  }

  changeFocus = (e) => {
    e.persist()
    this.setState((prevProps) => {
      return {
        ...prevProps,
        focus: { [e.target.name]: true }
      }
        // return {
        //   ...props,
        //   [e.target.name]: true,
        // }
    })
  }

  render() {
    return (
      <div>
        <div>s{this.state.focus.but}</div>
          <button 
          autoFocus={this.state.focus.but} 
          name='but'
          onClick={this.changeFocus}
          >CLICK</button>
      </div>
    );
  }
}
