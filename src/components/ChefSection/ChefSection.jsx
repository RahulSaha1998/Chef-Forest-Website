import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import './ChefSection.css'
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ChefSection = ({ data }) => {

    const { id, chefName, yearsOfExperience, likes, Recipe, chefPicture, rating } = data;

    return (
        <Container className='mt-5'>
            <CardGroup>
                <Card className="custom-card shadow bg-white">
                    <Card.Img variant="top" src={chefPicture} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            <p>Experience: {yearsOfExperience} years+</p>
                            <p>Recipe:
                                <ul>
                                    <li>{Recipe[0]}</li>
                                    <li>{Recipe[1]}</li>
                                    <li>{Recipe[2]}</li>
                                    <li>{Recipe[3]}</li>
                                    <li>{Recipe[4]}</li>
                                </ul>
                            </p>
                        </Card.Text>
                        <Link to={`/chefRecipe/${id}`}>
                            <Button variant="primary">View Recipes</Button>
                        </Link>

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <div className='d-flex justify-content-between '>
                            <div>
                                <FaRegThumbsUp className='mb-1'></FaRegThumbsUp> {likes} likes
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-1'>
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

