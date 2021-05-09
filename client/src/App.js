<<<<<<< HEAD:src/App.js
// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';


class App extends Component {
  render() {
    return (
      <React.Fragment>
  
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/main" component={Main} />
              </Switch>
            </Router>
      </React.Fragment>
    );
  }
=======
import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> main:client/src/App.js
}

export default App;
