import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({username, password, onChange, onSubmit, saving, errors}) =>{
  return (
    <div className="card rounded mt-4">
      <div className="card-body">
        <div className="text-center mb-4">
          <img src="https://c.sepanta.com/i1/a/a/logo3.png" alt="Sepanta" />
        </div>
        <form onSubmit={onSubmit}>
          {errors && errors.summary &&
            <div className="alert alert-danger">{errors.summary}</div>
          }
          <TextInput name="username" label="نام کاربری" value={username} onChange={onChange} error={errors.username} />
          <TextInput name="password" label="رمز عبور" value={password} onChange={onChange} error={errors.password} type="password" />
          <input
            type="submit"
            className="btn btn-primary btn-block"
            disabled={saving}
            value={saving? "بارگذاری..." : "ورود"} />
        </form>
      </div>
    </div>
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
