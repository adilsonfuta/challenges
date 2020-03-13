import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { RoutesPath } from './constants/path';

import Landing from './pages/Landing';

const Routes:React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={RoutesPath.LANDING} component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
