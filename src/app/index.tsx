import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { App as Home } from 'app/containers/Home';
import { App as Projects } from 'app/containers/Projects';
import { App as ProjectDetails } from 'app/containers/ProjectDetails';

// import { AnimatePresence } from 'framer-motion';

// import { hot } from 'react-hot-loader';

export const App = ({}) => {
  const location = useLocation();
  return (
    // <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact key="home" path="/" component={Home} />
        <Route exact key="list" path="/projects" component={Projects} />
        <Route exact key="details" path="/details/:id" component={ProjectDetails} />
        {/* <Route key="home" path="/" component={Home} /> */}
      </Switch>
    // </AnimatePresence>
  );
};
