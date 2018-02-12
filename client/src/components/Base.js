import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>

      {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object
};

export default Base;
