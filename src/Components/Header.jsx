import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
                
            </Navbar>
        </>
    )
}
