import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Loader from '../components/loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>

    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;