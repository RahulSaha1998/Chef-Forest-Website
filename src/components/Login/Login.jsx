import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle, FaGithub } from 'react-icons/fa';
;
import './Login.css'


const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';



    const handelLogin = (event) => {
        event.preventDefault()
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                setSuccess('successfully Login!');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError('Email and password doesn,t match!');
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

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
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='login mx-auto mt-5'>
            <div className='text-center'>
                <h3>Please Login!</h3>
                <hr />
            </div>
            <Card className='p-2 shadow p-3 mb-5 bg-white rounded'>
                <Form onSubmit={handelLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <div>
                        <div>
                            <p className='text-danger'>{error}</p>
                            <p className='text-success'>{success}</p>
                            <div className='text-start'>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                            <br />
                            <Form.Text className="text-secondary">
                                Don't Have an Account? <Link to="/register">Register</Link>
                            </Form.Text>
                        </div>
                        <br />
                        <div>
                            <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                            <br />
                            <Button
                                onClick={handleGithubSignIn}
                                variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
                        </div>
                    </div>


                </Form>
            </Card>

        </Container>
    );
};

export default Login;
