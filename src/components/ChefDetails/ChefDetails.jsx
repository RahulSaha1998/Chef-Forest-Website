import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const { id, bio, chefName, yearsOfExperience, likes, Recipe, chefPicture, rating } = chefDetails;

  return (
    <Container>
      <Row>
        
        <Col lg={6} md={12}>
          <Card className="custom-card shadow bg-white h-100">
            <Card.Body>
              <Card.Title>Chef Name: {chefName}</Card.Title>
              <Card.Text>
                <p>Bio: {bio}</p>
                <p>Experience: {yearsOfExperience} years</p>
                <p>
                  Recipe:
                  <ul>
                    <li>{Recipe[0]}</li>
                    <li>{Recipe[1]}</li>
                    <li>{Recipe[2]}</li>
                    <li>{Recipe[3]}</li>
                    <li>{Recipe[4]}</li>
                  </ul>
                </p>
              </Card.Text>
              
            </Card.Body>
            <Card.Footer className="text-muted">
            <Link to="/">
                <Button variant="primary">
                  <FaArrowLeft className="mb-1" /> Back to Home
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card shadow bg-white h-100">
            <Card.Img variant="top" src={chefPicture} className="h-100 rounded" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefDetails;
