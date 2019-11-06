import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FieldGroup from '../common/FieldGroup';

const SettingPage = ({ userProfile }) => {
  const {
    firstName, lastName, eMail, cellPhone,
  } = userProfile;
  return (
    <div>
      <FieldGroup title="اطلاعات کاربر">
        <div className="row">
          <div className="col-1 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={['far', 'user-circle']} size="2x" style={{ color: '#777' }} />
          </div>
          <div className="col">
            {firstName}
            {' '}
            {lastName}
            <br />
            <span className="text-muted">
            (
              {eMail || cellPhone}
            )
            </span>
          </div>
        </div>
      </FieldGroup>

      <FieldGroup className="text-center">
        <Link to="/login" className="btn btn-default btn-block text-danger">خروج</Link>
      </FieldGroup>
    </div>
  );
};

SettingPage.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userProfile: state.user.profile || {},
  };
}

export default connect(mapStateToProps)(SettingPage);
