import React, { Component } from "react";
import search from "../../../images/search.png";

const Search = (props) => {
    return (
        <>
        <img src={search} width="17" />
        <input
          type="text"
          onChange={props.searchUsers}
          placeholder="Search by name"
        />
      </>
    );
}

export default Search;
