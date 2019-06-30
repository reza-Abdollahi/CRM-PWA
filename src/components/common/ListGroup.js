import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({items}) => {
  const itemsList = items.map((item, index) =>
    <li key={index} className="list-group-item">{item}</li>
  );
  return(
    <div className="card">
      <ul className="list-group list-group-flush">
        {itemsList}
      </ul>
    </div>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array
};

export default ListGroup;
