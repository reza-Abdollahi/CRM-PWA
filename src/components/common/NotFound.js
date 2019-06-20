import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ location }) => {
  return (
    <div>
      <b>404</b> - NotFound
      <p>
        check your address again <i> &quot;{location.pathname}&quot;</i>
      </p>
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.object.isRequired
};

export default NotFound;
