import React from 'react';
import * as authService from '../login/authenticationService';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const axios = require('axios');

const styleLogOut = {
    "margin-left":"auto",
    "margin-right":"2vw"
}

const styleLI = {
    "margin-right":"1vw"
}
const handleClick = () =>
{
    const elem = document.getElementById('sidebar');
    elem.classList.toggle('collapse');
}
const btn = {
    className:"btn btn-outline-info",
    style: {
        "margin-left" : "2vw",
        "margin-right": "2vw"
    },
    onClick : handleClick
}

function handleLogout(event){
    event.preventDefault();

    authService.onLogout()
    .then(res =>{
        localStorage.removeItem('token');
        window.location.reload();
    })
    .catch(error => {
        console.log(error.response.data.msg);
    })
}

function handleSignOut(event){
    axios.post('http://localhost:4000/signout')
    .then(function (response) {
      
      console.log("sign out works");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function handleSignIn(event){
    axios.post('http://localhost:4000/signin')
  .then(function (response) {
    // handle success
    console.log("sign in works");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


function NavComponent()
{
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Image src="https://lh6.ggpht.com/gNy40q6S_519oQZ_AE9sGypZ-Z94zDy2Xpm5Tg5mYf8yVOSLAxAhEatKLn0vJDyFErE=w300" width ="40" height ="40"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">My Dashboard</Nav.Link>
      <Nav.Link href="/editProfile">Edit Profile</Nav.Link>
      {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>*/}
    </Nav>
    <Nav>
      <Nav.Link onClick={handleSignIn}>Sign In</Nav.Link>

      {/* display successfully signed out toast */}
      <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link> 
      <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default NavComponent;