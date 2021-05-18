import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Styles } from './EditForms'
// import { } from 'react-bootstrap';
import { Formik, useField, Form as Form1 } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import API from "../../utils/API";


const UserSigninFunction = (values) => {
    API.UserSigninFunction(values)
        .then(res => {
            window.location.href = '/main';
        }
        )
        .catch(err => alert("Unable to login. Username or password is not correct"));
}

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

const CustomCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField(props, 'checkbox');

    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}


function SignInForms() {
    return (
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
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        UserSigninFunction(values)
                        resetForm();
                        setSubmitting(false)
                    }, 3000)
                }}
            >
                {props => (
                    <Form1>
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
    )
}

export default SignInForms;
