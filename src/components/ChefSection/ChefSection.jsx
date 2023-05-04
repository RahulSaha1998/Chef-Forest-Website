import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import './ChefSection.css'
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

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
                        </Card.Text>
                        

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <div className='d-flex justify-content-between '>
                            <div>
                                <FaRegThumbsUp className='mb-1 text-danger'></FaRegThumbsUp> {likes} likes
                            </div>
                            
                            <div>
                            <Link to={`/chefRecipe/${id}`}>
                            <Button variant="outline-danger">View Recipes</Button>
                        </Link>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default ChefSection;

