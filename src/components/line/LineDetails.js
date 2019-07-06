import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FieldGroup from '../common/FieldGroup';
import FieldItem from '../common/FieldItem';
import ServiceDetails from './ServiceDetails';

const LineDetails = ({line}) => {
  return (
    <div>
      <FieldGroup>
        <FieldItem title="وضعیت" value={line.status} />
      </FieldGroup>
      {line.activeService && <ServiceDetails title="سرویس جاری" service={line.activeService} />}
      {line.prepaidService && <ServiceDetails title="سرویس پیش خرید" service={line.prepaidService} />}
    </div>
  );
};

LineDetails.propTypes = {
  line: PropTypes.object.isRequired,
};

export default LineDetails;
