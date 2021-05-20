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
  signin: function ({ email, password }) {
    return axios.post('/api/login', {
      email,
      password
    });
  },
  getEvents: function () {
    return axios.get('/api/events');
  },
  registerUserForEvent: function (eventId) {
    return axios.post(`/api/events/${eventId}/register`)
  }
};
