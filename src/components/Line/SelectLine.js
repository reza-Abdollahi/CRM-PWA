import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../common/FieldGroup';
import ListGroup from '../common/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const SelectLine = ({lines}) => {
  const items = lines.map(item => (
    <div key={item.id} className="d-flex">
      <div className="flex-grow-1">
        {item.phoneNumber}
      </div>
      <Link to={`/link/${item.id}`}>
        <FontAwesomeIcon icon="search" /> مشاهده
      </Link>
    </div>
  ));

  return (
    <div>
      <FieldGroup title="انتخاب خط" noPadding>
        <ListGroup items={items} />
      </FieldGroup>
    </div>
  );
};

SelectLine.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object)
};

export default SelectLine;
