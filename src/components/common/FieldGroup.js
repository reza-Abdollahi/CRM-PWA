import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = ({
  title, children, className, backgroundColor, noPadding,
}) => {
  let rowStyle = {};
  let rowClass = "row";
  let colClass = "col-12";
  rowStyle = backgroundColor ? { ...rowStyle, backgroundColor } : rowStyle;
  rowClass = noPadding ? `${rowClass} p-0` : rowClass;
  colClass = noPadding ? `${colClass} p-0` : colClass;

  return (
    <section className={`field-group ${className}`}>
      { title && <h1>{title}</h1> }
      <div className={rowClass} style={rowStyle}>
        <div className={colClass}>
          {children}
        </div>
      </div>
    </section>
  );
};

FieldGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

FieldGroup.defaultProps = {
  title: undefined,
  className: "",
  noPadding: false,
  backgroundColor: undefined,
};

export default FieldGroup;
