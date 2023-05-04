import React from 'react';
import { Button, Card, CardGroup, Container, Image } from 'react-bootstrap';
import './ChefSection.css'
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const ChefSection = ({ data }) => {

    const { id, chefName, yearsOfExperience, likes, Recipe, chefPicture, rating, numberOfRecipes } = data;

    return (
        <Container className='mt-5'>
            <CardGroup>
                <Card className="custom-card shadow bg-white">
                    <Card.Img variant="top" src={chefPicture} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            <p>Experience: {yearsOfExperience} years+</p>
                            <p>Recipe item:  {numberOfRecipes}+</p>
                            <div>
                                <Link to={`/chefRecipe/${id}`}>
                                    <Button variant="danger">View Recipes</Button>
                                </Link>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <div className='d-flex justify-content-between '>
                            <div>
                                <FaRegThumbsUp className='mb-1 text-danger'></FaRegThumbsUp> {likes} likes
                            </div>

                            <div className='d-flex align-items-center gap-1'>
                                <div className='mb-1'>
                                    <Rating
                                        placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                                <div>
                                    {rating}
                                </div>
                            </div>
                        </div>

                    </Card.Footer>
                </Card>               
            </CardGroup>
        </Container>
    );
};

export default ChefSection;

