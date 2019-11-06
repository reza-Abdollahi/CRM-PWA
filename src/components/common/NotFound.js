import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => {
  const desiredLocation = location.search.substring(1);
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>
          صفحه مورد نظر یافت نشد
          {' '}
          <i dir="ltr">
          &quot;
            {desiredLocation}
          &quot;
          </i>
        </h2>
        <p>متاسفانه صفحه مورد نظر شما وجود ندارد یا منتقل شده است یا فعلا در دسترس نیست</p>
        <Link to="/" className="btn btn-primary">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFound;
