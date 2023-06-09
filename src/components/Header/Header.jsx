import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Form, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {  NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './Header.css'
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg" className='shadow bg-white mb-5 rounded'>
                <Container fluid>
                    <Navbar.Brand href="#"><h2 className='text-danger'>Chef Forest</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item>
                                <NavLink exact to='/' className='nav-link'
                                style={{ color: 'blue' }} activeClassName='active'>Home</NavLink>
                            </Nav.Item>

                            <Nav.Item>
                                <NavLink exact to='/blog'
                                style={{ color: 'blue' }} className='nav-link ' activeClassName='active'>Blog</NavLink>
                            </Nav.Item>

                        </Nav>
                        <Form className="d-flex">
                            {
                                user

                                ?
                                    <>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="user-display-name">{user?.displayName}</Tooltip>}
                                        >
                                            <Image style={{ height: '40px' }} src={user?.photoURL} roundedCircle />
                                        </OverlayTrigger>
                                        <Button
                                        className='mx-3'
                                        onClick={handleLogOut} variant="danger">  Logout</Button>
                                    </> 
                                    : <Link to='/login' className='text-decoration-none' ><Button variant="danger">Login</Button></Link>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
