import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft, FaHeart, FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChefDetails.css'
import Rating from 'react-rating';

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const { id, bio, chefName, yearsOfExperience, likes, recipes, chefPicture, rating, numberOfRecipes } = chefDetails;

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
            <Card.Img variant="top" src={chefPicture} className="h-100 rounded chef-img" />
            <Card.Body>
              <Card.Title>
                <span className='text-danger'>Chef Name:</span> {chefName}
              </Card.Title>
              <Card.Text>
                <p><span className='text-danger'>Chef Bio:</span> {bio}</p>
                <div className='details-card'>
                <div className='mb-3'>
                    <Link to="/">
                      <Button variant="primary">
                        <FaArrowLeft className="mb-1" />  Home
                      </Button>
                    </Link>
                  </div>
                  
                  <p><span className='text-danger'>Recipe: </span>{numberOfRecipes} items</p>
                  <p><span className='text-danger'>Experience: </span>{yearsOfExperience} year+</p>
                </div>
              </Card.Text>
            </Card.Body>
            <ToastContainer />
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card shadow bg-white h-100">
            <Card.Body>
              <Card.Title className='text-center'> <span className='text-danger'>Chef Special Recipe</span> <hr /> </Card.Title>
              <Card.Text className='cards gap-2'>
                {/* ====================== */}
                <Card>
                  <Card.Body>
                    <Card.Text>
                      <div>
                        <h6 ><span className='text-danger'>Recipe:</span> {recipes[0].name}</h6>
                      </div>
                      <p><span className='text-danger'>Cooking Method:</span> {recipes[3].cookingMethod}</p>
                      <span className='text-danger'>Ingredients:</span>
                      <ul>
                        <li>{recipes[0].ingredients[0]}</li>
                        <li>{recipes[0].ingredients[1]}</li>
                        <li>{recipes[0].ingredients[2]}</li>
                        <li>{recipes[0].ingredients[3]}</li>
                        <li>{recipes[0].ingredients[4]}</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between '>
                      <div>
                      <Button variant="outline-danger"
                          onClick={handleLoveButton}
                          disabled={buttonDisabled}
                        >
                          <FaHeart
                            className='m-1'
                          ></FaHeart>
                        </Button> {recipes[0].r_likes} likes
                      </div>
                      <div className='d-flex align-items-center justify-content-center gap-1'>
                        <div className='mb-1'>
                          <Rating
                            placeholderRating={recipes[0].r_rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
                        <div>
                          {recipes[0].r_rating}
                        </div>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      <h6 ><span className='text-danger'>Recipe:</span> {recipes[1].name}</h6>
                      <p><span className='text-danger'>Cooking Method:</span> {recipes[1].cookingMethod}</p>
                      <span className='text-danger'>Ingredients:</span>
                      <ul>
                        <li>{recipes[1].ingredients[0]}</li>
                        <li>{recipes[1].ingredients[1]}</li>
                        <li>{recipes[1].ingredients[2]}</li>
                        <li>{recipes[1].ingredients[3]}</li>
                        <li>{recipes[1].ingredients[4]}</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between '>
                      <div>
                      <Button variant="outline-danger"
                          onClick={handleLoveButton}
                          disabled={buttonDisabled}
                        >
                          <FaHeart
                            className='m-1'
                          ></FaHeart>
                        </Button> {recipes[1].r_likes} likes
                      </div>
                      <div className='d-flex align-items-center justify-content-center gap-1'>
                        <div className='mb-1'>
                          <Rating
                            placeholderRating={recipes[1].r_rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
                        <div>
                          {recipes[1].r_rating}
                        </div>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      <h6 ><span className='text-danger'>Recipe:</span> {recipes[2].name}</h6>
                      <p><span className='text-danger'>Cooking Method:</span> {recipes[2].cookingMethod}</p>
                      <span className='text-danger'>Ingredients:</span>
                      <ul>
                        <li>{recipes[2].ingredients[0]}</li>
                        <li>{recipes[2].ingredients[1]}</li>
                        <li>{recipes[2].ingredients[2]}</li>
                        <li>{recipes[2].ingredients[3]}</li>
                        <li>{recipes[2].ingredients[4]}</li>
                      </ul>
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between '>
                      <div>
                      <Button variant="outline-danger"
                          onClick={handleLoveButton}
                          disabled={buttonDisabled}
                        >
                          <FaHeart
                            className='m-1'
                          ></FaHeart>
                        </Button> {recipes[2].r_likes} likes
                      </div>
                      <div className='d-flex align-items-center justify-content-center gap-1'>
                        <div className='mb-1'>
                          <Rating
                            placeholderRating={recipes[2].r_rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
                        <div>
                          {recipes[2].r_rating}
                        </div>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      <h6 ><span className='text-danger'>Recipe:</span> {recipes[3].name}</h6>
                      <p><span className='text-danger'>Cooking Method:</span> {recipes[3].cookingMethod}</p>
                      <span className='text-danger'>Ingredients:</span>
                      <ul>
                        <li>{recipes[3].ingredients[0]}</li>
                        <li>{recipes[3].ingredients[1]}</li>
                        <li>{recipes[3].ingredients[2]}</li>
                        <li>{recipes[3].ingredients[3]}</li>
                        <li>{recipes[3].ingredients[4]}</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between '>
                      <div>
                      <Button variant="outline-danger"
                          onClick={handleLoveButton}
                          disabled={buttonDisabled}
                        >
                          <FaHeart
                            className='m-1'
                          ></FaHeart>
                        </Button> {recipes[3].r_likes} likes
                      </div>
                      <div className='d-flex align-items-center justify-content-center gap-1'>
                        <div className='mb-1'>
                          <Rating
                            placeholderRating={recipes[3].r_rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
                        <div>
                          {recipes[3].r_rating}
                        </div>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>

              </Card.Text>
            </Card.Body>
            <ToastContainer />
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default ChefDetails;
