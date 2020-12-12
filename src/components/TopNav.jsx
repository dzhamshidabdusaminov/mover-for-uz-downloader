import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const TopNav = () => {
    return (
        <Navbar bg="light" fixed="top" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand href="#">Mover.for.uz</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Contact links" id="nav-dropdown">
                        <NavDropdown.Item href="https://github.com/dzhamshidabdusaminov/" target="_blank">Github</NavDropdown.Item>
                        <NavDropdown.Item href="https://weblog.uz" target="_blank">Weblog.uz</NavDropdown.Item>
                        <NavDropdown.Item href="https://t.me/lucky_nub" target="_blank">Telegram</NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/about">
                        <Nav.Link href="#">About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/faq">
                    <Nav.Link href="#">FAQ</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav
