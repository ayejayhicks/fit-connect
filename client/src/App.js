
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import CreateEventForm from './Pages/CreateEvent';
import { UserProvider } from './utils/GlobalState';

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/createEvent" component={CreateEventForm} />
            </Switch>
          </Router>
        </React.Fragment>
      </UserProvider>
    );
  }
}

export default App;
