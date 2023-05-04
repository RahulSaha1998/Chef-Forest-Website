import React, { useContext, useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProviders';
import Loader from '../loader/Loader';


const Blog = () => {
    const pdfExportComponent = useRef(null);

    const handleDownload = () => {
        pdfExportComponent.current.save();
    };

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }
    else if (user) {
        return (
            <Container>
                <div className='text-center'>
                    <Button variant='danger' onClick={handleDownload}>Download Blogs</Button>
                </div>
                <PDFExport ref={pdfExportComponent}>
                    <div className="container mt-3">
                        <div className="card bg-light shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Ques 1: Tell us the differences between uncontrolled and controlled components.</h5>
                                <p className="card-text">Ans: Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 2: How to validate React props using PropTypes?</h5>
                                <p className="card-text">Ans: To transmit data from a parent component to a child component in React, use props like short for properties. The type and structure of the data being passed through props must be correct. Using the prop-types library, which is part of React, we can validate props.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 3: Tell us the difference between nodejs and express js?</h5>
                                <p className="card-text">Ans: The package that provides the JavaScript run-time environment is called NodeJS, and the Express Js is which built on top of NodeJS, aids in handling requests and responses.</p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 4: What is a custom hook, and why will you create a custom hook?</h5>
                                <p className="card-text">Ans: Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write. Additionally, it speeds up the rendering of the code by eliminating the need to repeatedly render a custom hook while rendering the entire code.</p>
                            </div>
                        </div>
                    </div>
                </PDFExport>

            </Container>

        );
    }
    else {
        return (
            <Container>
                <div className='text-center'>
                    <Button variant='danger' onClick={handleDownload}>Downloads Blog</Button>
                </div>
                <PDFExport ref={pdfExportComponent}>
                    <div className="container mt-3">
                        <div className="card bg-light shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Ques 1: Tell us the differences between uncontrolled and controlled components.</h5>
                                <p className="card-text">Ans: Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 2: How to validate React props using PropTypes?</h5>
                                <p className="card-text">Ans: To transmit data from a parent component to a child component in React, use props like short for properties. The type and structure of the data being passed through props must be correct. Using the prop-types library, which is part of React, we can validate props.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 3: Tell us the difference between nodejs and express js?</h5>
                                <p className="card-text">Ans: The package that provides the JavaScript run-time environment is called NodeJS, and the Express Js is which built on top of NodeJS, aids in handling requests and responses.</p>
                            </div>
                        </div>

                        <div className="card bg-light shadow-sm mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Ques 4: What is a custom hook, and why will you create a custom hook?</h5>
                                <p className="card-text">Ans: Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write. Additionally, it speeds up the rendering of the code by eliminating the need to repeatedly render a custom hook while rendering the entire code.</p>
                            </div>
                        </div>
                    </div>
                </PDFExport>

            </Container>

        );
    }


};

export default Blog;
