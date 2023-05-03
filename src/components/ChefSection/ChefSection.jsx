import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import './ChefSection.css'
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ChefSection = ({ data }) => {

    const { chefName, yearsOfExperience, numberOfRecipes, likes, ChefSpecial, chefPicture, rating } = data;

    return (
        <Container className='mt-5'>
            <CardGroup>
                <Card className="custom-card shadow bg-white">
                    <Card.Img variant="top" src={chefPicture} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            <p>Experience: {yearsOfExperience} years</p>
                            <p>Recipe:
                                <ul>
                                    <li>{ChefSpecial[0]}</li>
                                    <li>{ChefSpecial[1]}</li>
                                    <li>{ChefSpecial[2]}</li>
                                    <li>{ChefSpecial[3]}</li>
                                    <li>{ChefSpecial[4]}</li>
                                </ul>
                            </p>
                        </Card.Text>
                        <Button variant="primary">View Recipes</Button>

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <div className='d-flex justify-content-between '>
                            <div>
                                <FaRegThumbsUp></FaRegThumbsUp> {likes} likes
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

