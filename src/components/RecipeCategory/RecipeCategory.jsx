import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Image } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import './RecipeCategory.css'
import Rating from 'react-rating';

const RecipeCategory = () => {

    const handleFavoriteButton = () => {
        toast("Added to Favorite Food!!");
    };

    return (
        <Container>
            <Col lg={12} md={12}>
                <div className='recipe-cards gap-2'>
                    <Card className="custom-card shadow bg-white h-100">
                        <Image src="food5.jpg" rounded />
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-between'>
                                <div>
                                    <h6>Fried Meat With French Fries</h6>
                                    <Rating
                                        placeholderRating={5}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                                <div>
                                    <Button variant="outline-danger"
                                        onClick={handleFavoriteButton}
                                    >
                                        <FaHeart
                                            className='m-1'
                                        ></FaHeart>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ToastContainer />
                    </Card>
                    <Card className="custom-card shadow bg-white h-100">
                        <Image src="food3.jpg" rounded />
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-between'>
                                <div>
                                <h6>Chicken Kabab</h6>
                                <Rating
                                        placeholderRating={4.5}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning '></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                                <div>
                                    <Button variant="outline-danger"
                                        onClick={handleFavoriteButton}
                                    >
                                        <FaHeart
                                            className='m-1'
                                        ></FaHeart>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ToastContainer />
                    </Card>
                    <Card className="custom-card shadow bg-white h-100">
                        <Image src="food1.jpg" rounded />
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-between'>
                                <div>
                                <h6>Chicken Chillie Ball</h6>
                                <Rating
                                        placeholderRating={3.7}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning '></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                                <div>
                                    <Button variant="outline-danger"
                                        onClick={handleFavoriteButton}
                                    >
                                        <FaHeart
                                            className='m-1'
                                        ></FaHeart>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ToastContainer />
                    </Card>
                    <Card className="custom-card shadow bg-white h-100">
                        <Image src="food4.jpg" rounded />
                        <Card.Body>
                            <Card.Text className='d-flex justify-content-between'>
                                <div>
                                <h6>Chicken Ramen Pasta</h6>
                                <Rating
                                        placeholderRating={4}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                        
                                    />
                                </div>
                                <div>
                                    <Button variant="outline-danger"
                                        onClick={handleFavoriteButton}
                                    >
                                        <FaHeart
                                            className='m-1'
                                        ></FaHeart>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ToastContainer />
                    </Card>
                </div>
            </Col>
        </Container>
    );
};

export default RecipeCategory;