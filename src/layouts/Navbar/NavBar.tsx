import React from 'react';
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

export const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-end">
                    <Nav>
                        <Nav.Link href="/list">Lista pytań</Nav.Link>
                        <Nav.Link href="/question">Dodaj pytanie</Nav.Link>
                        <Nav.Link href="/learn">Learn</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}