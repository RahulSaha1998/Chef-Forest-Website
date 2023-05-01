import React, { useContext } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='w-25 mx-auto mt-5'>
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
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
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
