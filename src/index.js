import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import LoginPage from './components/auth/LoginPage';
import './styles/styles.less';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

if (process.env.NODE_ENV !== 'production') {
  const {mockBackendApi} = require('./helpers/mockApi');
  mockBackendApi();
}

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
