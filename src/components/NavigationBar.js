import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  
  .navbar-brand {
  img {
  height: 30px;
    width: 120px;
  }
`;

export const NavigationBar = (props) => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className='span'>
                        <Nav.Link>
                            <Link to="/profile" >Profile</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item  className='span'>
                        <Nav.Link>
                            <Link to="/form" >Dynamic Form</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)