import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Styles } from './EditForms'
// import { } from 'react-bootstrap';
import { Formik, useField } from 'formik';
import * as Yup from 'yup'
import '../../index.css'

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
                    acceptedTerms: false,
                    password: '',
                }}
                validationSchema={Yup.object({
 
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required("Please enter your password")
                        .matches(
                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                            "Invalid Password"
                        ),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept terms and conditions'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false)
                    }, 3000)
                }}
            >
                {props => (
                    <Form>
                    <Form.Row>
                        <CustomTextInput label="Login" name="email" type="email" placeholder=" batman@gmail.com" />
                    </Form.Row>
                    <Form.Row>
                        <CustomTextInput label="Password" name="password" type="password" placeholder=" ******" />
                    </Form.Row>
                        <Form.Group>
                            <Button variant="flat" className="col text-center mt-3" type="submit">{props.isSubmitting ? 'Loading...' : 'Login'}</Button>
                        </Form.Group>
                    </Form>
                )}

            </Formik>
        </Styles>
    )
}

export default SignInForms;
