import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './ChefSection.css'
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefSection = ({ data }) => {

    const { chefName, yearsOfExperience, numberOfRecipes, likes, ChefSpecial, chefPicture } = data;

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
                    <Card.Footer className="text-muted"><FaRegThumbsUp></FaRegThumbsUp> {likes} likes</Card.Footer>
                </Card>
            </CardGroup>

        </Container>
    );
};

export default ChefSection;

