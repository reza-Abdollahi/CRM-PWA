import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldGroup from '../common/FieldGroup';
import ListGroup from '../common/ListGroup';

const LinesList = ({ lines, onSelectLine }) => (
  <FieldGroup title="انتخاب خط" noPadding>
    <ListGroup items={
      lines.map((item) => (
        <div key={item.id} className="d-flex">
          <div className="flex-grow-1">
            {item.number}
          </div>
          <button
            type="button" className="btn btn-default btn-link"
            value={item.id}
            onClick={(e) => onSelectLine(item.id)}>
            <FontAwesomeIcon icon="search" />
            {' '}
            مشاهده
          </button>
        </div>
      ))
    } />
  </FieldGroup>
);

LinesList.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object),
  onSelectLine: PropTypes.func.isRequired,
};

LinesList.defaultProps = {
  lines: [],
};

export default LinesList;
