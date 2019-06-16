import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({username, password, onChange, onSubmit, saving, errors}) =>{
  return (
    <form onSubmit={onSubmit}>
      <h1>ورود</h1>
      <TextInput name="username" label="نام کاربری" value={username} onChange={onChange} />
      <TextInput name="password" label="رمز عبور" value={password} onChange={onChange} type="password" />
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
}

export default LoginForm;
