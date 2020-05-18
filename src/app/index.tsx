import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { App as Home } from 'app/containers/Home';

import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/todo" component={TodoApp} />
  </Switch>
));
