import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      errors: {},
      saving: false
    };
  }

  onChange(event){
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  validateForm(){
    let errors = {},
        formIsValid = true;

    if (!this.state.username) {
      errors.username = "ورود مقدار الزامی است";
      formIsValid = false;
    }
    if (!this.state.password) {
      errors.password = "ورود مقدار الزامی است";
      formIsValid = false;
    }

    this.setState({errors});
    return formIsValid;
  }

  onSubmit(event){
    event.preventDefault();

    if (!this.validateForm())
      return;

    this.setState({saving: true});
    this.props.actions.login(this.state.username, this.state.password)
      .then(()=> this.props.history.push("/"))
      .catch(error => {
        this.setState({saving: false, errors: {summary: error.message}});
      });
  }

  render(){
    const {username, password, saving, errors} = this.state;

    return (
      <div className="container-fluid">
        <LoginForm username={username} password={password} saving={saving} errors={errors}
          onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return{
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
