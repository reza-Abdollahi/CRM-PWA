import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/authActions';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    this.props.logout();
    this.props.history.replace('/');
  }

  render() {
    const {user} = this.props;
    return (
      <div className="jumbotron">
        <h1>Sepanta</h1>
        {
          user.isLoggedIn &&
          <div>
            <p>Dear <b>{user.profile.username}</b>, welcome to Sepanta</p>
            <button className="btn btn-default" onClick={this.signOut}>Sign Out</button>
          </div>
        }
        {
          !user.isLoggedIn &&
          <Link to="/login" className="btn btn-primary btn-lg">login</Link>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {logout})(HomePage);
