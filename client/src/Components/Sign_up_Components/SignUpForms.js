import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Styles } from './EditSignUpForms'
// import { } from 'react-bootstrap';
import { Formik, useField, Form as Form1 } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import API from "../../utils/API";


// Technology Formik: 
// Technology Yup: 
const UserFunction = (values) => {
    
    API.saveUser(values)
        .then(res => {
            window.location.href = '/signin';
        }
        )
        .catch(err => console.log(err));
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
            <Form.Group as={Row} >
                <Col xl={{ span: 10, offset: 2 }}>
                    <Form.Check {...field} {...props} label={children} name={props.name} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </Col>
            </Form.Group>

        </>
    )
}

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>  <Form.Group as={Col} name={props.name}>
            <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
            <Form.Control as="select" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </Form.Group>
        </>

    )
}

function SignUpForms() {
    return (
        <Styles>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    age: '',
                    gender: '',
                    city: '',
                    zipCode: '',
                    emergencyContact: '',
                    phoneNumberOfEmergency: '',
                    fitnessLevel: '',
                    acceptedTerms: false,
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(3, 'Must be at least 3 characters')
                        .max(15, 'must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .min(3, 'must be at least 3 characters')
                        .max(15, 'must be 15 characters or less')
                        .required('Required'),
                    phoneNumber: Yup.number()
                        .test('len', 'Please enter a valid Phone Number', (val) => { if (val) return val.toString().length === 10; })
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required("Please enter your password")
                        .matches(
                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                        ),
                    confirmPassword: Yup.string()
                        .required("Please confirm your password")
                        .when("password", {
                            is: password => (password && password.length > 0 ? true : false),
                            then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
                        }),
                    age: Yup.number()
                        .required('Please enter your age')
                        .min(18, 'You must be at least 18 years old'),
                    fitnessLevel: Yup.string()
                        .oneOf(['Beginner', 'Intermediate', 'Advanced'])
                        .required('Required'),
                    city: Yup.string()
                        .required('Required'),
                    zipCode: Yup.number()
                        .test('len', 'Please enter a valid ZipCode', (val) => { if (val) return val.toString().length === 5; })
                        .required('Required'),
                    gender: Yup.string()
                        .oneOf(['Male', 'Female', 'Prefer not to say'])
                        .required('Required'),

                    emergencyContact: Yup.string()
                        .min(3, 'Must be at least 3 characters')
                        .max(15, 'must be 15 characters or less')
                        .required('Required'),
                    phoneNumberOfEmergency: Yup.number()
                        .test('len', 'Please enter a valid Phone Number', (val) => { if (val) return val.toString().length === 10; })
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept terms and conditions'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        UserFunction(values)
                        resetForm();
                        setSubmitting(false)
                    }, 3000)
                }}
            >
                {props => (

                    <Form1>
                        <h1>SIGN UP</h1>
                        <Form.Row>
                            <CustomTextInput label="First Name" name="firstName" type="text" placeholder=" Bruce" />
                            <CustomTextInput label="Last Name" name="lastName" type="text" placeholder=" Wayne" />
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="Phone Number" name="phoneNumber" type="boolean" placeholder=" (123) 345-6789" />
                            <CustomTextInput label="Email" name="email" type="email" placeholder=" batman@gmail.com" />
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="Password" name="password" type="password" placeholder=" ******" />
                            <CustomTextInput label="Confirm Password" name="confirmPassword" type="password" placeholder=" ******" />
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="Age" name="age" type="boolean" placeholder="0" />
                            <CustomSelect label="Gender" name="gender">
                                <option value="">Please Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </CustomSelect>
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="City" name="city" type="text" placeholder=" Select City" />
                            <CustomTextInput label="Zip Code" name="zipCode" type="boolean" placeholder=" 30033" />
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="Emergency Contact" name="emergencyContact" type="text" placeholder=" Robin" />
                            <CustomTextInput label="Phone Number for Emergency " name="phoneNumberOfEmergency" type="text" placeholder=" Wayne" />
                        </Form.Row>

                        <Row>
                            <CustomSelect label="Fitness Level" name="fitnessLevel">
                                <option value="">Please Select</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </CustomSelect>
                        </Row>

                        <CustomCheckBox name="acceptedTerms">
                            I accept the terms and conditions
                        </CustomCheckBox>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="signUpCancel" href="/" type="submit">{props.isSubmitting ? 'Loading...' : 'Back'}</Button>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Button variant="flat" type="submit">{props.isSubmitting ? 'Loading...' : 'Register'}</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form1>
                )}
            </Formik>
        </Styles>
    )
}

export default SignUpForms;
