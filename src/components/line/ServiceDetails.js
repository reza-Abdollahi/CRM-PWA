import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../common/FieldGroup';
import FieldItem from '../common/FieldItem';
import ListGroup from '../common/ListGroup';

const ServiceDetails = ({title, service}) => {
  if (!service)
    return null;

  return (
    <FieldGroup title={title} noPadding>
      <ListGroup items={
        [
          <FieldItem key="1" title="رده" value={service.tarrifClass} />,
          <FieldItem key="2" title="عنوان" value={service.serviceTitle} />
        ]
      } />
    </FieldGroup>
  );
};

ServiceDetails.propTypes = {
  title: PropTypes.string.isRequired,
  service: PropTypes.object.isRequired,
};

export default ServiceDetails;
