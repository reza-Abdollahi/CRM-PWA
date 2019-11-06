import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { actions } = this.props;
    actions.logout();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      errors: {},
      saving: false,
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.validateForm()) { return; }

    const { location, actions, history } = this.props;
    const { username, password } = this.state;
    const { from: returnUrl } = location.state || { from: { pathname: "/" } };

    this.setState({ saving: true });
    actions.login(username, password)
      .then(() => history.push(returnUrl))
      .catch((error) => {
        this.setState({ saving: false, errors: { summary: error.message } });
      });
  }

  validateForm() {
    const errors = {};
    let formIsValid = true;
    const { username, password } = this.state;

    if (!username) {
      errors.username = "ورود مقدار الزامی است";
      formIsValid = false;
    }
    if (!password) {
      errors.password = "ورود مقدار الزامی است";
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  render() {
    const {
      username, password, saving, errors,
    } = this.state;

    return (
      <div className="container-fluid">
        <LoginForm
username={username} password={password} saving={saving} errors={errors}
          onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
