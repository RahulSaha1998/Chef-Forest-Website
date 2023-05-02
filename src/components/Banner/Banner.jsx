import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className='shadow bg-white rounded'>
            <Carousel.Item>
                <div style={{ height: '500px' }}>
                    <img
                        className="d-block w-100 rounded"
                        style={{ height: '100%', objectFit: 'cover' }}
                        src="1.jpg"
                        alt="First slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Yummy Pasta</h3>
                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{ height: '500px' }}>
                    <img
                        className="d-block w-100 rounded"
                        style={{ height: '100%', objectFit: 'cover' }}
                        src="2.jpg"
                        alt="second slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Tandoori chicken</h3>
                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{ height: '500px' }}>
                    <img
                        className="d-block w-100 rounded"
                        style={{ height: '100%', objectFit: 'cover' }}
                        src="3.jpg"
                        alt="Third slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Ultimate Cheese Pizza</h3>
                    <p>
                    A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;