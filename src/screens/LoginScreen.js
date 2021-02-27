import React from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";

const LoginScreen = () => {
    return (
        <>
            <Form>
                <FormContainer>
                    <h1 className='text-center'>Sign In</h1>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='admin@example.com'
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='admin' />
                    </Form.Group>
                    <Button className='my-3' block variant='dark' type='submit'>
                        Login
                    </Button>
                    <p>
                        Don't have an account?
                        <Link to={"/"}> Sign Up </Link>
                    </p>
                </FormContainer>
            </Form>
        </>
    );
};

export default LoginScreen;