import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Home from './pages/Home/Home';
import ShortUrlResolver from './components/ResolveUrl/ShortUrlResolver';
import urlHelper from './helpers/urlHelper';
import urlShortenerService from './requests/urlShortenerService';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:shortUrl" exact component={ShortUrlResolver} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
