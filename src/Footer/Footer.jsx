import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='mt-5'>
            <Navbar bg="dark" variant="dark" className='rounded' style={{ height: '200px' }}>
                <Container className='d-flex mx-5 justify-content-center'>
                    <Navbar.Text>
                        © 2023 Example Company. All rights reserved. 
                        <li>Address: "123 Main St, Anytown USA"</li>
                        <li>
                            Phone number: "(123) 456-7890"
                        </li>
                        <li>Email address: "info@chiefrestaurant.com"</li>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Footer;