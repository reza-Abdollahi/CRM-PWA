import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div className="jumbotron">
        <h1>Sepanta</h1>
        {
          user.isLoggedIn &&
          <div>
            <p>Dear <b>{user.profile.Username}</b>, welcome to Sepanta</p>
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
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(HomePage);
