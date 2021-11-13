import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Car Hut</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>

                        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                            {/* <NavDropdown.Item as={Link} to="/makeAdmin">MakeAdmin</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/myProducts">MyProducts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allProducts">AllProducts</NavDropdown.Item>
                            <Nav.Link as={Link} to="/manageProducts">ManageProducts</Nav.Link> */}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        {user?.email ?

                            <Button onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }


                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;