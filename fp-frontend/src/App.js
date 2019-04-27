import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home.component'
import Create from './components/create.component.js';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Weather from './components/weather.component';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="container bg-light">
            <nav className="navbar navbar-expand-lg bg-info">
              <div className="navbar-brand  text-light">Fullstack Project</div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link  text-light">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link  text-light">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link  text-light">List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/weather'} className="nav-link  text-light">Weather</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/index' component={ Index } />
                <Route path='/weather' component={ Weather } />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;