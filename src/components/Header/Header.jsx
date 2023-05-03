import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Form, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

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
                    <Navbar.Brand href="#"><h2>RainForest Cafe</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand className='mt-0'>
                                <Link to='/' className='text-decoration-none'>Home</Link>
                            </Navbar.Brand>

                            <Navbar.Brand className='mt-0'>
                                <Link to='/blog' className='text-decoration-none'>Blog</Link>
                            </Navbar.Brand>

                        </Nav>
                        <Form className="d-flex">
                            {
                                user && user.uid

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
                                        onClick={handleLogOut} variant="outline-success">  Logout</Button>
                                    </> 
                                    : <Link to='/login' className='text-decoration-none' ><Button variant="outline-success">Login</Button></Link>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;