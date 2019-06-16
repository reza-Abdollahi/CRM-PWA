import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import LoginForm from './LoginForm';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange(event){
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.actions.login(this.state.username, this.state.password)
      .then(()=> browserHistory.push("/"))
      .catch(error => console.log(error));
  }

  render(){
    const {loggedIn} = this.props;
    const {username, password} = this.state;

    return (
      <div>
        {loggedIn && <h2>loggedIn</h2>}
        <LoginForm username={username} password={password} 
          onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  const {loggedIn} = state.auth;
  return{
    loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
