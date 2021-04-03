import React, { Component } from "react";
import search from "../../../images/search.png";

class Search extends Component {
  render() {
    return (
        <>
        <img src={search} width="17" />
        <input
          type="text"
          onChange={this.props.searchUsers}
          placeholder="Search by name"
        />
      </>
    );
  }
}

export default Search;
