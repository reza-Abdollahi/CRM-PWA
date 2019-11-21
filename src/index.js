import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import NotFound from './components/common/NotFound';
import Login from './components/auth/LoginPage';
import './helpers/configureFontAwesome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@ghalamborm/bootstrap4-rtl/bootstrap-rtl.min.css';
import './styles/styles.less';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const { mockBackendApi } = require('./helpers/mockApi');
  mockBackendApi();
}

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app"),
);
