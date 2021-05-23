import axios from "axios";


// Export an object containing methods 

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  saveUser: function (values) {
    return axios.post('/api/users', {
      firstName: values.firstName ,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      age: values.age,
      gender: values.gender,
      city: values.city,
      zipCode: values.zipCode,
      emergencyContact: values.emergencyContact,
      phoneNumberOfEmergency: values.phoneNumberOfEmergency,
      fitnessLevel: values.fitnessLevel
    });
  },
  saveEvent: function (values) {
    return axios.post('/api/events', {
      eventName: values.eventName ,
      typeOfEvent: values.typeOfEvent,
      descriptionOfEvent: values.descriptionOfEvent,
      date: values.date,
      level: values.level,
      time: values.time,
      duration: values.duration,
      participants: values.participants,
      eventLocation: values.eventLocation,
      city: values.city,
    });
  },
  signin: function ({ email, password }) {
    return axios.post('/api/login', {
      email,
      password
    });
  },
  logout: function () {
    return axios.post('/api/logout', {
    });
  },
  getEvents: function () {
    return axios.get('/api/events');
  },
  registerUserForEvent: function (eventId) {
    return axios.post(`/api/events/${eventId}/register`)
  },
  unregisterUserForEvent: function (eventId) {
    return axios.post(`/api/events/${eventId}/unregister`)
  }
};
