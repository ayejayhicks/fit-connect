import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Styles } from './EditForms'
import { Formik, useField, Form as Form1 } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import API from "../../utils/API";
<<<<<<< HEAD
import { useUserContext } from '../../utils/GlobalState';
=======
import { useUserContext } from '../../utils/GlobalState'
import AuthService from '../../utils/AuthService';
import './SignInForms.css'
>>>>>>> fixing-css

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>  <Form.Group as={Col} name={props.name}>
            <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
            <Form.Control className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </Form.Group>
        </>
    )
}


function SignInForms() {
    const [state, dispatch] = useUserContext();
    const [userCreds, setUserCreds] = useState({});

    useEffect(() => {
        console.log('state', state);
        if (!state.id || state.id.length === 0) {
            return;
        }

        window.location.href = '/main';
    }, [state]);

    useEffect(() => {
        if (!userCreds || Object.keys(userCreds).length === 0) {
            return;
        }

        setUserCreds({});

        const signIn = async (creds) => {
            try {
                const { status, data: { user } } = await API.signin(creds)
                if (status === 200 && user) {
                    dispatch({ type: "signIn", user })
                } else {
                    alert("Unable to login. Username or password is not correct")
                }
            } catch (error) {
                alert("Unable to login. Username or password is not correct")
            }
        }

        signIn(userCreds);
    }, [userCreds, dispatch]);

    const formSubmissionHandler = (values, { setSubmitting, resetForm }) => {
        setUserCreds(values);
        resetForm();
        setSubmitting(false);
    }

    return (
        <Container className="MarginContainerSignIn">
            <Row className="signInContainerForm">
                <Col md={4} xs={2} />
                <Col md={4} xs={8}>
                    <Styles>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                                password: Yup.string()
                                    .required("Please enter your password"),
                            })}
                            onSubmit={formSubmissionHandler}
                        >

                            {props => (
                                <Form1>
                                    <Form.Row>
                                        <h1 className="textAlignCenter"> Sign In</h1>
                                    </Form.Row>
                                    <Form.Row>
                                        <CustomTextInput label="Login" name="email" type="email" placeholder=" batman@gmail.com" />
                                    </Form.Row>
                                    <Form.Row>
                                        <CustomTextInput label="Password" name="password" type="password" placeholder=" ******" />
                                    </Form.Row>
                                    <Form.Group>
                                        <Button variant="flat" className="col text-center mt-3" type="submit">{props.isSubmitting ? 'Loading...' : 'Login'}</Button>
                                    </Form.Group>
                                </Form1>
                            )}

                        </Formik>
                    </Styles>
                </Col>
                <Col md={4} xs={2} />
            </Row>
        </Container>
    )
}

export default SignInForms;
