import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Loader from '../loader/Loader';
import { Container } from 'react-bootstrap';

const Blog = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }
    else if (user) {
        return (
            <Container>
    
                <h2>Hello from blogs</h2>
            </Container>
        );
    }
    else{
        return (
            <Container>
    
                <h2>Hello from blogs</h2>
            </Container>
        );
    }
    
};

export default Blog;