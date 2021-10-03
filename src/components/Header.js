import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {
    return(
            <Navbar collapseOnSelect bg="trans" sticky="top"
            expand="sm">
                <Navbar.Brand href="#home">
                    <img
                        src="/gift.jpg" alt="" height="28" width="25" 
                        className="d-inline-block align-top"
                    />{' '}
                    Antique Gift
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav  className="ml-auto">
                        <NavDropdown title="Gifts">
                            <NavDropdown.Item href="#gifts/cards">Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#gifts/candles">Candles</NavDropdown.Item>
                            <NavDropdown.Item href="#gifts/jewlery">Jewlery</NavDropdown.Item>
                            <NavDropdown.Item href="#gifts/box">Special Box</NavDropdown.Item>
                            <NavDropdown.Item href="#gifts/new">New</NavDropdown.Item>
                            <NavDropdown.Divider/>
                                <NavDropdown.Item href="#gifts/promo">Promo</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#invitations">Invitations</Nav.Link>
                        <Nav.Link href="#delivery">Delivery</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar> 
    );
    
}

export default Header;