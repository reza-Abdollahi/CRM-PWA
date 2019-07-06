import React from 'react';
import PropTypes from 'prop-types';

const FieldItem = ({title, value, children, className, ...rest}) => {
  const additionalClassName = className || "";
  return (
    <div className={`d-flex align-items-center ${additionalClassName}`} {...rest}>
      <div className="flex-grow-1">
        {title}
      </div>
      {
        children
          ? {children}
          : <span className="text-secondary">{value}</span>
      }
    </div>
  );
};

FieldItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
};

export default FieldItem;
