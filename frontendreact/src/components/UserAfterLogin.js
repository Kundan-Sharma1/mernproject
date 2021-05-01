import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/login" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <NavigationBar />
        <br />
        <br />
        <h1 className="head">WELCOME {name}</h1>
        <br />
        <br />
        <h3 style={{color:"maroon"}}>THIS IS YOUR DASHBOARD</h3>
        <br />
        <h4>You can see here your details and can also update your profile.</h4>
        <h4>You can also see the list of available equipments.</h4>
      </div>
    )
  }
}

export default UserAfterLogin
