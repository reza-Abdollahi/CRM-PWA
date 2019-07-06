import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LineDetailsHeader = ({line, selectLineUrl, hasMoreLines}) => {
  return (
    <div className="row bg-warning mt-n4" style={{borderRadius:'30px'}}>
      <div className="col text-center align-bottom pt-5 pb-3">
        {
          hasMoreLines &&
          <Link to={selectLineUrl} className="position-absolute" style={{bottom: '1rem', right: '1rem'}}>
            <FontAwesomeIcon icon="chevron-right" size="2x" transform="down-4"/>
            <small>خط ها</small>
          </Link>
        }
        {line.number}
      </div>
    </div>
  );
};

LineDetailsHeader.propTypes = {
  line: PropTypes.object.isRequired,
  selectLineUrl: PropTypes.string.isRequired,
  hasMoreLines: PropTypes.bool.isRequired,
};

export default LineDetailsHeader;
