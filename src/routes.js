import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';

// Pages
import Home from './components/Home';
import About from './components/About';
import Page from './components/Page';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Signout from './components/Signout';

import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/page" component={Page} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/signout" component={Signout} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
