import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Navbar = ({ onGoHome, message }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: '#2196F3' }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={onGoHome}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: '80px', height: 'auto' }}
          />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark me-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurant" className="nav-link text-dark me-3">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark me-3">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark me-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {message && (
          <div
            className="message"
            style={{ fontSize: '14px', marginLeft: '15px', color: '#fff' }}
          >
            {message}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
