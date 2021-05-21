import React, { createContext, useReducer, useContext } from "react";
import AuthService from "./AuthService";

const defaultState = AuthService.authedAcct() || {
  id: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  age: 0,
  gender: "",
  city: "",
  zipCode: "",
  emergencyContact: "",
  phoneNumberOfEmergency: "",
  fitnessLevel: "",
  events: []
}
const UserContext = createContext(defaultState);
const { Provider } = UserContext;

function reducer(state, action) {
  switch (action.type) {
  case "signIn":
    const { user } = action;
    console.log('Storing user', user);
    AuthService.loginUser(user)
    return user;
  case "signOut":
    console.log('Signing out user', state);
    AuthService.logout();
    return defaultState;
  default:
    return state;
  }
}

function UserProvider({ value = defaultState, ...props }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
