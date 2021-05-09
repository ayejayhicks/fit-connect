
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
}

export default App;
