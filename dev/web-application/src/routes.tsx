import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { RoutesPath } from './constants/path';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

const Routes:React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutesPath.LANDING} component={Landing} />
      <Route path={RoutesPath.DASHBOARD} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
