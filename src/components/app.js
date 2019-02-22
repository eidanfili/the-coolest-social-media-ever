import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Home from './pages/home';
import Post from './pages/post';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/Post" component={Post} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}