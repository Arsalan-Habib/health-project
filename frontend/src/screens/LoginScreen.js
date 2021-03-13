import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userState";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";

const LoginScreen = ({ location, history }) => {
    // local component level state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // getting the user state and the userLogin function
    const { user, userLogin } = useContext(UserContext);

    // deciding where to redirect
    const redirect = location.search ? location.search.split("=")[1] : "/";

    // redirecting after successful login
    useEffect(() => {
        if (user) {
            history.push(redirect);
        }
    }, [history, user, redirect]);

    // dispatching the login function
    const submitHandler = async (e) => {
        e.preventDefault();
        userLogin(email, password);
        console.log(user);
    };

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
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
            </Form>
        </FormContainer>
    );
};

export default LoginScreen;
