import React from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";

const RegisterScreen = () => {
    return (
        <Form>
            <FormContainer>
                <h1 className='my-2 text-center'>Create Account </h1>
                <Form.Group controlId='fname'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder='John' />
                </Form.Group>

                <Form.Group controlId='lname'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder='Doe' />
                </Form.Group>

                <Form.Group controlId='phone'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type='tel'
                        placeholder='03322XXXXXX'
                        minLength='11'
                    />
                </Form.Group>

                <Form.Group controlId='cnic'>
                    <Form.Label>CNIC Number</Form.Label>
                    <Form.Control type='text' placeholder='4210104817245' />
                </Form.Group>

                <Form.Group controlId='dob'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type='date'
                        name='dob'
                        placeholder='Date of Birth'
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group controlId='gender'>
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
                        type='email'
                        placeholder='admin@example.com'
                    />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' />
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' />
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
            </FormContainer>
        </Form>
    );
};

export default RegisterScreen;
