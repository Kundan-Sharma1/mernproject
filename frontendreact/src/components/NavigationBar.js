import React from 'react';
import { Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
//import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
//import './App.scss';

function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand to="/adminafterlogin"><img src="../favicon.ico" width="30" height="30"></img> </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/adminafterlogin">ADMIN HOME </Nav.Link> |
              <Nav.Link href="/displayall">DISPLAY ALL </Nav.Link> |
              <Nav.Link href="/search">SEARCH </Nav.Link> |
              <Nav.Link href="/delete">DELETE </Nav.Link> |
              <Nav.Link href="/manageemp">MANAGE MEMBER</Nav.Link> |
              <Nav.Link href="/manageins">MANAGE INS</Nav.Link> |
              <Nav.Link href="/logout">LOGOUT</Nav.Link>

        </Nav>
      </Navbar>
      
    )

  }
  else if (authuser === 'USER') {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand to="/adminafterlogin"><img src="../favicon.ico" width="30" height="30"></img> </Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link href="/userafterlogin">USER HOME </Nav.Link> |
          <Nav.Link href="/viewprofile">VIEW PROFILE</Nav.Link> |
          <Nav.Link href="/updateprofile">UPDATE</Nav.Link> |
          <Nav.Link href="/avlins">AVAILABLE ITEMS</Nav.Link> |
          <Nav.Link href="/logout">LOGOUT</Nav.Link>
      </Nav>
      </Navbar>
    )
  }
  
  else {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand to="/adminafterlogin"><img src="../favicon.ico" width="30" height="30"></img> </Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link href="/">HOME </Nav.Link> |
              <Nav.Link href="/reg">REG </Nav.Link>|
              <Nav.Link href="/login">LOGIN </Nav.Link> |
              <Nav.Link href="/about">ABOUT US </Nav.Link> |
              <Nav.Link href="/contact">CONTACT US </Nav.Link> |
              <Nav.Link href="/avlins">AVAILABLE ITEMS</Nav.Link> |
              <Nav.Link href="/adminlogin">ADMIN LOGIN </Nav.Link>
              </Nav>
      </Navbar>
    )
  }
}

export default NavigationBar
