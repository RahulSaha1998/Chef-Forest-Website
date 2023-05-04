import React from 'react';
import { Button, Card, Col, Container, Image, ToastContainer } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import './Chefs.css'

const Chefs = () => {

    return (
        <Container>
            <div className='text-center mt-5'>
                <h2>Chefs</h2>
                <hr />
            </div>
            <Marquee>
                <Container>
                    <Col lg={12} md={12}>
                        <div className='chef-cards gap-2'>
                            <Card className="custom-card shadow bg-white h-100">
                                <Image src="chef1.jpg" rounded />
                                <Card.Body>
                                    <Card.Text>
                                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                                    </Card.Text>
                                </Card.Body>
                                <ToastContainer />
                            </Card>
                            <Card className="custom-card shadow bg-white h-100">
                                <Image src="chef2.jpg" rounded />
                                <Card.Body>
                                    <Card.Text>
                                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                                    </Card.Text>
                                </Card.Body>
                                <ToastContainer />
                            </Card>
                            <Card className="custom-card shadow bg-white h-100">
                                <Image src="chef3.jpg" rounded />
                                <Card.Body>
                                    <Card.Text>
                                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                                    </Card.Text>
                                </Card.Body>
                                <ToastContainer />
                            </Card>
                            <Card className="custom-card shadow bg-white h-100">
                                <Image src="chef4.jpg" rounded />
                                <Card.Body>
                                    <Card.Text>
                                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                                    </Card.Text>
                                </Card.Body>
                                <ToastContainer />
                            </Card>
                            
                        </div>
                    </Col>              
                </Container>
            </Marquee>
        </Container>
    );
};

export default Chefs;