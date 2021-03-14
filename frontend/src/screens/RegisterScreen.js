import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../context/userState";

const RegisterScreen = ({ location, history }) => {
    // local component level state
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        cnicNumber: "",
        dateOfBirth: null,
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // updates local state
    const onChangeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state);
    };

    // getting the user state and the userRegister function
    const { user, userRegister } = useContext(UserContext);

    // deciding where to redirect
    const redirect = location.search ? location.search.split("=")[1] : "/";

    // redirecting after successful registration
    useEffect(() => {
        if (user) {
            history.push(redirect);
        }
    }, [history, user, redirect]);

    // dispatching the userRegister function
    const submitHandler = async (e) => {
        e.preventDefault();

        // checking if the passwords don't match
        if (state.password !== state.confirmPassword) {
            window.alert("passwords do not match");
        } else {
            userRegister(state);
        }
    };

    return (
        <FormContainer>
            <h1 className='my-2 text-center'>Create Account </h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='fname'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        name='firstName'
                        type='text'
                        placeholder='John'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='lname'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required
                        name='lastName'
                        type='text'
                        placeholder='Doe'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='phone'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        required
                        name='phoneNumber'
                        type='tel'
                        placeholder='03322XXXXXX'
                        minLength='11'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='cnic'>
                    <Form.Label>CNIC Number</Form.Label>
                    <Form.Control
                        name='cnicNumber'
                        required
                        type='text'
                        placeholder='4210104817245'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='dob'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type='date'
                        required
                        name='dateOfBirth'
                        placeholder='Date of Birth'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='gender' onChange={onChangeHandler}>
                    <Form.Label>Gender</Form.Label>
                    <div>
                        <Form.Check
                            type='radio'
                            id='male'
                            label='Male'
                            name='gender'
                            value='male'
                            inline
                        />
                        <Form.Check
                            type='radio'
                            id='female'
                            label='Female'
                            name='gender'
                            value='female'
                            inline
                        />
                    </div>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        name='email'
                        type='email'
                        placeholder='admin@example.com'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        name='password'
                        type='password'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        name='confirmPassword'
                        type='password'
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Button
                    size='lg'
                    className='my-4'
                    block
                    variant='dark'
                    type='submit'
                >
                    Sign Up
                </Button>

                <p>
                    Already have an account?
                    <Link to={"/login"}> Sign In </Link>
                </p>
            </Form>
        </FormContainer>
    );
};

export default RegisterScreen;
