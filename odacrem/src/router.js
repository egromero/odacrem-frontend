import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/users/sign_up">
        <SignUp />
      </Route>
      <Route path="/users/sign_in">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
