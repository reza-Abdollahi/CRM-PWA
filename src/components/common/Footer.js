import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <nav className="row">
        <div className="col">
          <NavLink exact to="/" activeClassName="active"><FontAwesomeIcon icon="home" /></NavLink>
        </div>
        <div className="col">
          <NavLink to="/about" activeClassName="active"><FontAwesomeIcon icon="ellipsis-h" /></NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
