import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({username, password, onChange, onSubmit, saving, errors}) =>{
  return (
    <form onSubmit={onSubmit}>
      <h1>ورود</h1>
      {errors && errors.summary &&
        <div className="alert alert-danger">{errors.summary}</div>
      }
      <TextInput name="username" label="نام کاربری" value={username} onChange={onChange} error={errors.username} />
      <TextInput name="password" label="رمز عبور" value={password} onChange={onChange} error={errors.password} type="password" />
      <input
        type="submit"
        className="btn btn-primary"
        disabled={saving}
        value={saving? "بارگذاری..." : "ورود"} />
    </form>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default LoginForm;
