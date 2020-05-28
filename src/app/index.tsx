import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { App as Home } from 'app/containers/Home';
import { App as Projects } from 'app/containers/Projects';

import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/todo" component={TodoApp} />
    </Switch>
  </div>
));


