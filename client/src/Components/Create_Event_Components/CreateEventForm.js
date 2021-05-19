import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Styles } from '../Sign_up_Components/EditSignUpForms'
// import { } from 'react-bootstrap';
import { Formik, useField, Form as Form1 } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



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

// const CustomCheckBox = ({ children, ...props }) => {
//     const [field, meta] = useField(props, 'checkbox');

//     return (
//         <>
//             <Form.Group as={Row} >
//                 <Col xl={{ span: 10, offset: 2 }}>
//                     <Form.Check {...field} {...props} label={children} name={props.name} />
//                     {meta.touched && meta.error ? (
//                         <div className="error">{meta.error}</div>
//                     ) : null}
//                 </Col>
//             </Form.Group>

//         </>
//     )
// }

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

function CreateEventForm(date) {
    const [startDate, setStartDate] = useState(new Date());
 
    new Date(date).toLocaleDateString()
    return (
        <Styles>
            <Formik
                initialValues={{
                    typeOfEvent: '',
                    descriptionOfEvent: '',
                    date: '',
                    time: '',
                    duration: '',
                    level: '',
                    maxParticipants: '',

                }}
                validationSchema={Yup.object({
                    eventName: Yup.string()
                        .min(3, 'Must be at least 3 characters')
                        .max(15, 'must be 15 characters or less')
                        .required('Required'),
                    typeOfEvent: Yup.string()
                        .oneOf(['Yoga', 'Hiking', 'Walk', 'Running', 'MountainBiking', 'Biking', 'WeightLifting', 'GymClass'])
                        .required('Required'),
                    descriptionOfEvent: Yup.string()
                        .min(5, 'Must be at least 5 characters')
                        .required('Required'),
                    level: Yup.string()
                        .oneOf(['Beginner', 'Intermediate', 'Advanced'])
                        .required('Required'),
                    duration: Yup.string()
                        .oneOf(['15m', '30m', '45m', '1h', '1h15m', '1h30m', '2h'])
                        .required('Required'),
                    time: Yup.string('5:00am', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '13:00pm', '14:00pm', '15:00pm', '16:00pm', '17:00pm', '18:00pm')
                        .required('Required'),
                    participants: Yup.number()
                        .oneOf([5, 10, 15, 20])
                        .required('Required'),
                    
                    
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

                        <h1>CREATE EVENT</h1>

                        <Form.Row>
                            <CustomTextInput label="Event Name" name="eventName" type="text" placeholder="Be creative" />
                        </Form.Row>

                        <Form.Row>
                            <CustomSelect label="Type of Event" name="typeOfEvent">
                                <option value="">Please Select</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Hiking">Hiking</option>
                                <option value="Running">Running</option>
                                <option value="MountainBiking">Mountain Biking</option>
                                <option value="Biking">Biking</option>
                                <option value="WeightLifting">Weight Lifting</option>
                                <option value="GymClass">Gym Class</option>
                                <option value="Walk">Walk</option>
                            </CustomSelect>
                        </Form.Row>

                        <Form.Row>
                            <CustomTextInput label="Description of the event" name="descriptionOfEvent" descriptionOfEvent="text" placeholder="Describe your event" />
                        </Form.Row>

                        <Form.Row>
                        <DatePicker label="Date" selected={startDate} onChange={date => setStartDate(date)} />
                        </Form.Row>

                        <Row>
                            <CustomSelect label="Event Level" name="level">
                                <option value="">Please Select</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </CustomSelect>
                        </Row>

                        <Row>
                            <CustomSelect label="Time" name="time">
                                <option value="">Please Select</option>
                                <option value="05:00am">5AM</option>
                                <option value="06:00am">6AM</option>
                                <option value="07:00am">7AM</option>
                                <option value="08:00am">8AM</option>
                                <option value="09:00am">9AM</option>
                                <option value="10:00am">10AM</option>
                                <option value="11:00am">11AM</option>
                                <option value="12:00pm">12PM</option>
                                <option value="13:00pm">13PM</option>
                                <option value="14:00pm">14PM</option>
                                <option value="15:00pm">15PM</option>
                                <option value="16:00pm">16PM</option>
                                <option value="17:00pm">17PM</option>
                                <option value="18:00pm">18PM</option>
                            </CustomSelect>
                            <CustomSelect label="Duration" name="duration">
                                <option value="">Please Select</option>
                                <option value="15m">15m</option>
                                <option value="30m">30m</option>
                                <option value="45m">45m</option>
                                <option value="1h">1h</option>
                                <option value="1h15m">1h15m</option>
                                <option value="1h30m">1h30m</option>
                                <option value="2h">2h</option>
                            </CustomSelect>
                        </Row>

                        <Row>
                            <CustomSelect label="Max number of participants" name="participants">
                                <option value="">Please Select</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </CustomSelect>
                        </Row>

                        


                      

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="signUpCancel" href="/" type="submit">{props.isSubmitting ? 'Loading...' : 'Back'}</Button>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="flat" type="submit">{props.isSubmitting ? 'Loading...' : 'Register'}</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form1>
                )}
            </Formik>
      </Styles>
    )
}

export default CreateEventForm;
