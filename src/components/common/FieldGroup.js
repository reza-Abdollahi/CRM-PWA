import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = ({title, children, className, ...rest}) => {
  className = className || "";
  return (
    <section className={"field-group " + className} {...rest}>
      { title && <h1>{title}</h1> }
      <div className="row">
        <div className="col-12">
          {children}
        </div>
      </div>
    </section>
  );
};

FieldGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default FieldGroup;
