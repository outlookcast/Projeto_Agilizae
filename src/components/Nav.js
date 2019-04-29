import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import '../CSS/Nav.css';

export default class Menu extends Component {
    render(){
        return (
          <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav container'>
            <Navbar.Brand href="home" className='nav-iten'>Agilizaê</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto nav-iten">
                <Nav.Link href="promocao" className='nav-iten'>Eventos</Nav.Link>
                <Nav.Link href="descontos" className='nav-iten'>Descontos</Nav.Link>
                <NavDropdown title="Bares" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="favoritos" className='nav-iten'>Favoritos</NavDropdown.Item>
                  <NavDropdown.Item href="proximos" className='nav-iten'>Bares Próximos</NavDropdown.Item>
                {//<NavDropdown.Divider />
                //<NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                }
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="descontos" className='nav-iten'>Login</Nav.Link>
              <Nav.Link eventKey={2} href="/formularioCliente" className='nav-iten'>
                Criar conta
              </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        );
    }
  }


