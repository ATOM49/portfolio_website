import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'app/theme';

// prepare store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
