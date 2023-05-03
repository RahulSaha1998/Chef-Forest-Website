import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const { id, bio, chefName, yearsOfExperience, likes, Recipe, chefPicture, rating } = chefDetails;

  const [buttonDisabled, setDisabled] = useState(false);

  const handleLoveButton = () => {
    toast("You have added it, to your favorite List!");
    setDisabled(true);
  };

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
              <div className='d-flex justify-content-between '>
                <div>
                  <Button variant="light"
                    onClick={handleLoveButton}
                    disabled={buttonDisabled}
                  >
                    <FaHeart
                      className='mb-1 text-danger'
                    ></FaHeart>
                  </Button>
                  {likes} likes
                </div>
                <Link to="/">
                  <Button variant="primary">
                    <FaArrowLeft className="mb-1" /> Back to Home
                  </Button>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card shadow bg-white h-100">
            <Card.Img variant="top" src={chefPicture} className="h-100 rounded" />
            <ToastContainer />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefDetails;
