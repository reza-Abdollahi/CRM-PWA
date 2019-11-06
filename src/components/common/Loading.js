/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="position-absolute d-flex flex-column align-items-center justify-content-center" style={styles.container}>
      <div className="border rounded p-2" style={styles.spinnerBorder}>
        <div className="spinner-border text-warning m-3" style={styles.spinner} />
        <div className="text-center">بارگذاری ...</div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  loading: false,
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

const styles = {
  container: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2224',
  },
  spinnerBorder: {
    backgroundColor: '#fffc',
  },
  spinner: {
    width: '5rem',
    height: '5rem',
  },
};

export default Loading;
