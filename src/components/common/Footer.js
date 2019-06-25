import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <nav className="row">
        <div className="col">
          <NavLink exact to="/" activeClassName="active">خانه</NavLink>
        </div>
        <div className="col">
          <NavLink to="/about" activeClassName="active">درباره ما</NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
