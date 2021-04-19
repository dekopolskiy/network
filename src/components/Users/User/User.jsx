import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { getProfile } from "../../../redux/thunks_creator";
import { reset_profile } from "../../../redux/actions_creator"

const User = (props) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    props.getProfile(props.match.params.id);
      return () => {
    props.reset_profile()
      }
  }, [props.match.params.id])  

    return <div>
        <h1>{props.profile.fullName}</h1>
        <img src={props.profile.photos.large} alt="empty"/>
        <div>{Object.entries(props.profile.contacts).map(([i, y]) => {
              return <div key={i}>{i} : {y? y : 'empty'}</div>
        })}</div>
    </div>
}

const mapStateToProps = (state) => ({
    profile: state.profile_,
})

const mapDispatchToProps = {
    getProfile,
    reset_profile,
}

export default compose( withRouter, connect(mapStateToProps, mapDispatchToProps))(User);
