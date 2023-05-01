import React from 'react';
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><h2>RainForest Cafe</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand>
                                <Link to='/' className='text-decoration-none'>Home</Link>
                            </Navbar.Brand>

                            <Navbar.Brand>
                                <Link to='/blog' className='text-decoration-none'>Blog</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to='/login' className='text-decoration-none'>Login</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to='/register' className='text-decoration-none'>Registration</Link>
                            </Navbar.Brand>
                            
                            
                        </Nav>
                        <Form className="d-flex">
                            <img style={{height: '40px'}} src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                            <Button variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;