import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="title" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="title" as={Link} to="/products">Products</Nav.Link>



                        {user?.email ?

                            <>  <Nav.Link className="title" as={Link} to="/dashboard">Dashboard</Nav.Link> <Button onClick={logout} variant="light">Logout</Button> </> :

                            <>  <Nav.Link className="title" as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link className="title" as={Link} to="/register">Register</Nav.Link> </>

                        }


                        <Navbar.Text>
                            <a href="#login"></a>
                        </Navbar.Text>
                        <h6 className="username">{user?.displayName}</h6>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;