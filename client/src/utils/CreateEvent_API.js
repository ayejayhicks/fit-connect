import axios from "axios";

export default {

    createEvent: function (values) {
      return axios.post('/api/createEvent', {
        eventName: values.eventName ,
        eventType: values.eventType,
        descriptionofEvent: values.descriptionofEvent,
        date: values.date,
        level: values.level,
        time: values.time,
        duration: values.duration,
        participants: values.participants,
        eventLocation: values.eventLocation,
        location: values.location,
      });
    }