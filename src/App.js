import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HeaderNav />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
