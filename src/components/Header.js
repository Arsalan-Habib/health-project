import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' className='px-5 py-2' sticky='top'>
            <LinkContainer to='/'>
                <Navbar.Brand>Navbar</Navbar.Brand>
            </LinkContainer>

            <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/about'>
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default Header;
