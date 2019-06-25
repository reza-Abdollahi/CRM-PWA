import React from 'react';
import PropTypes from 'prop-types';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <header className="fixed-top text-center">
      <h2>سپنتا</h2>
      <div className="float-right" style={{position:'absolute', top:0, left: 0}}>
        {/*temporarily styled untill being replaced by another mechanism*/}
        {loading && <LoadingDots interval={100} dots={20} />}
      </div>
    </header>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
