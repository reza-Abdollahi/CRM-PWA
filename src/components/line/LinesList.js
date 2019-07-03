import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FieldGroup from '../common/FieldGroup';
import ListGroup from '../common/ListGroup';

/* eslint-disable react/jsx-no-bind */

const LinesList = ({lines, onSelectLine}) => {
  return (
    <FieldGroup title="انتخاب خط" noPadding>
      <ListGroup items={
        lines.map(item => (
          <div key={item.id} className="d-flex">
            <div className="flex-grow-1">
              {item.number}
            </div>
            <button value={item.id} className="btn btn-default btn-link"
              onClick={e => onSelectLine(item.id)}>
              <FontAwesomeIcon icon="search" /> مشاهده
            </button>
          </div>
        ))
      } />
    </FieldGroup>
  );
};

LinesList.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object),
  onSelectLine: PropTypes.func.isRequired,
};

export default LinesList;
