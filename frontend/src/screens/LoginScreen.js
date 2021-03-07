import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/users/login",
            { email, password },
            config
        );

        console.log(data);
    };

    return (
        <Form onSubmit={submitHandler}>
            <FormContainer>
                <h1 className='mt-5 text-center'>Sign In</h1>
                <Form.Group controlId='email'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='admin@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='admin'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    size='lg'
                    className='my-4'
                    block
                    variant='dark'
                    type='submit'
                >
                    Login
                </Button>
                <p>
                    Don't have an account?
                    <Link to={"/signup"}> Sign Up </Link>
                </p>
            </FormContainer>
        </Form>
    );
};

export default LoginScreen;
