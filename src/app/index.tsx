import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Projects } from 'app/containers/Projects';
import { Home } from 'app/containers/Home';

export const App = ({ }) => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route exact key="about" path={"/about"} component={Home} />
      <Route key="list" path={["/:id", "/"]} component={Projects} />
    </Switch>
  );
};
