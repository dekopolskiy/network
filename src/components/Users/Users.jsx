import React, { Component } from 'react'
import logo from "../../images/ano.jpg";

class Users extends Component {
    render() {
        return (
            <>
            {this.props.users.map((i) => {
                return <div>
                    <div><img src={i.photos.large? i.photos.large : logo} alt=""/></div>
                    {i.name}
                    {i.id}
                    {i.followed}
                    {i.status}
                </div>
            })}
            </>
        )
    }
}



export default Users;