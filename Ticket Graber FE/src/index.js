import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/Landing';
import NotFoundPage from './pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import * as authConfig from "./config.json";
import { AuthProvider, SecureRoute, useAuthContext } from "@asgardeo/auth-react";
import Home from './pages/Home';
import PropTypes from 'prop-types'; // Import PropTypes

// SecureRedirect component with prop type validation
const SecureRedirect = (props) => {
  const { component: Component, path } = props;
  const { signIn } = useAuthContext();
  

  const callback = () => {
    signIn();
  };

  return (<SecureRoute exact path={path} component={Component} callback={callback} />);
};

SecureRedirect.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

// ReactDOM render method
ReactDOM.render(
  <AuthProvider config={authConfig.default}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <SecureRedirect exact path="/home" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

// Service worker unregister
serviceWorker.unregister();
