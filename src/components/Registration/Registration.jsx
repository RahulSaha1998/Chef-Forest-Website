import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import './Registration.css'
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Registration = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const { registerUser, updateUserData, logOut, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from =  location.state?.from?.pathname || '/';

    const handelRegister = (event) => {
        event.preventDefault()
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        console.log(photoURL);
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return setError('Password must be greater than 6 characters');
        }

        registerUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(name, photoURL);
                logOut()
                console.log(loggedUser);
                form.reset();
                setError('')
                setSuccess('Successfully Register!');
                toast('Successfully Register!');
                navigate('/login');
                alert('successfully Register!');
                    
            })
            .catch(error => {
                console.log(error);
            })

    }
    const GoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='register mx-auto mt-5'>
            <div className='text-center'>
                <h3>Register Here!</h3>
                <ToastContainer />
                <hr />
            </div>
            <Card className='p-2 shadow p-3 mb-5 bg-white rounded'>
                <Form onSubmit={handelRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name"  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                        {
                            <p className='text-danger'>{error}</p>

                        }
                    </Form.Group>
                    <p className='text-success'>{success}</p>

                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                    <div className='text-start mt-3'>
                            <Button onClick={GoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                            <br />
                            <Button
                                onClick={handleGithubSignIn}
                                variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
                        </div>
                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Card>
        </Container>
    );
};

export default Registration;