import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../common/FieldGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';

class SettingPage extends React.Component {
  constructor(props){
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    this.props.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <FieldGroup title="اطلاعات کاربر">
          <div className="row">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={['far', 'user-circle']} size="2x" style={{color: '#777'}} />
            </div>
            <div className="col">
              {this.props.userProfile.FirstName} {this.props.userProfile.LastName}
              <br/>
              <span className="text-muted">({this.props.userProfile.Username})</span>
            </div>
          </div>
        </FieldGroup>

        <FieldGroup className="text-center">
          <button className="btn btn-default btn-block text-danger" onClick={this.signOut}>خروج</button>
        </FieldGroup>
      </div>
    );
  }
}

SettingPage.propTypes = {
  userProfile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userProfile: state.user.profile
  };
}

export default connect(mapStateToProps, {logout})(SettingPage);
