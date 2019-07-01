import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FieldGroup from '../common/FieldGroup';
import ListGroup from '../common/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, Redirect} from 'react-router-dom';

const SelectLinePage = ({lines, loadingCompleted}) => {
  switch (lines.length) {
    case 0:
      return loadingCompleted
        ? <div className="alert alert-warning mt-3">
          لطفا جهت ثبت نام از <a href="https://internet.sepanta.com/signup" className="alert-link">سایت</a> اقدام کنید
          </div>
        : null;
    case 1:
      return <Redirect to={getLineUrl(lines[0])} />;
    default:
      return (
        <FieldGroup title="انتخاب خط" noPadding>
          <ListGroup items={
            lines.map(item => (
              <div key={item.id} className="d-flex">
                <div className="flex-grow-1">
                  {item.phoneNumber}
                </div>
                <Link to={getLineUrl(item)}>
                  <FontAwesomeIcon icon="search" /> مشاهده
                </Link>
              </div>
            ))
          } />
        </FieldGroup>
      );
  }
};

function getLineUrl(line) {
  return `/line/${line.id}`;
}

SelectLinePage.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object),
  loadingCompleted: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
  return {
    loadingCompleted: state.activeAjaxCalls === 0,
    lines: state.lines,
  };
}

export default connect(mapStateToProps)(SelectLinePage);
