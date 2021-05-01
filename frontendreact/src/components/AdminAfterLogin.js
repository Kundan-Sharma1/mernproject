import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div>
        <NavigationBar />
        <br /><br/>
        <h1 className='head'>WELCOME ADMIN</h1>
        <br /><br/>
        <h2>You can manage data of gym members and also equipments.</h2>
      </div>
    )
  }
}

export default AdminAfterLogin
