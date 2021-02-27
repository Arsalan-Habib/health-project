import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <LinkContainer to='/'>
                <Navbar.Brand>Navbar</Navbar.Brand>
            </LinkContainer>

            <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <Nav.Link href='#features'>Features</Nav.Link>
                <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
