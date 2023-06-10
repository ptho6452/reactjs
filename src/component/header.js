import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import "../css/tooplate-wave-cafe.css";
import "../fontawesome/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (

      <div className="tm-left">
        <div className="tm-left-inner">
          <div className="tm-site-header" style={{ marginLeft: '25px' }}>
          <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" alt="tiki-logo"/>
            {/* <i className="fas fa-coffee fa-3x tm-site-logo"></i> */}
            {/* <h1 className="tm-site-name">Wave Cafe</h1> */}
          </div>
          <nav className="tm-site-nav">
            <ul className="tm-site-nav-ul">
              <div className='row'>
                <div className='col-sm-6'>
              <li className="tm-page-nav-item">
                <Link to="/drink" className="tm-page-link active">
                <i className="fa-solid fa-book tm-page-link-icon"></i>                {/* <i className="fas fa-mug-hot tm-page-link-icon"></i> */}
                  <span>Book Shop</span>
                </Link>
              </li>
              </div>
              <div className='col-sm-6'>
              <li className="tm-page-nav-item">
                <Link to="/about" className="tm-page-link">
                  <i className="fas fa-users tm-page-link-icon"></i>
                  <span>About Us</span>
                </Link>
              </li>
            
              </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
              <li className="tm-page-nav-item">
                <Link to="/special" className="tm-page-link">
                  <i className="fas fa-glass-martini tm-page-link-icon"></i>
                  <span>Special Items</span>
                </Link>
              </li>
              </div>
              <div className='col-sm-6'>
              <li className="tm-page-nav-item">
                <Link to="/contact" className="tm-page-link">
                  <i className="fas fa-comments tm-page-link-icon"></i>
                  <span>Contact</span>
                </Link>
              </li>
              </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
              <li className="tm-page-nav-item">
                <Link to="/Admin" className="tm-page-link">
                  <i className="fas fa-comments tm-page-link-icon"></i>
                  <span>Admin</span>
                </Link>
              </li>
              </div>
                <div className='col-sm-6'>
                <li className="tm-page-nav-item">
                <Link to="/Cart" className="tm-page-link">
                  <i className="fas fa-comments tm-page-link-icon"></i>
                  <span>Cart</span>
                </Link>
              </li>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>

  );
};

export default Header;
