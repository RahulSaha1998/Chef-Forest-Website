import React from 'react';
import { Container } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container className='text-center'>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-warning" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-info" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-dark" role="status">
                <span class="sr-only"></span>
            </div>
        </Container>
    );
};

export default Loader;