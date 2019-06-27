import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../common/FieldGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class SettingPage extends React.Component {
  render() {
    const {FirstName, LastName, Username} = this.props.userProfile;
    return (
      <div>
        <FieldGroup title="اطلاعات کاربر">
          <div className="row">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={['far', 'user-circle']} size="2x" style={{color: '#777'}} />
            </div>
            <div className="col">
              {FirstName} {LastName}
              <br/>
              <span className="text-muted">({Username})</span>
            </div>
          </div>
        </FieldGroup>

        <FieldGroup className="text-center">
          <Link to="/login" className="btn btn-default btn-block text-danger">خروج</Link>
        </FieldGroup>
      </div>
    );
  }
}

SettingPage.propTypes = {
  userProfile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userProfile: state.user.profile
  };
}

export default connect(mapStateToProps)(SettingPage);
