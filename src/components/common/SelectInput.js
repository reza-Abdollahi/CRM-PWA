import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name, label, onChange, defaultOption, value, error, options,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control">
        <option value="">{defaultOption}</option>
        {
          options.map(
            (option) => <option key={option.value} value={option.value}>{option.text}</option>,
          )
        }
      </select>
      {error && <div className="bg-danger text-danger" style={{ padding: 5 }}>{error}</div>}
    </div>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

SelectInput.defaultProps = {
  defaultOption: "",
  value: "",
  error: "",
  options: [],
};

export default SelectInput;
