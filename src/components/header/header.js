import React from 'react';
// import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import headerLogo from '../../images/brandAssets/logoHeader.svg';

let menu = <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="#D9D9D9"/>
              <rect y="6" width="20" height="2" rx="1" fill="#D9D9D9"/>
              <rect y="12" width="20" height="2" rx="1" fill="#D9D9D9"/>
            </svg>


const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
          <Link to="/">
          <img src={headerLogo} alt=""/>
          </Link>
        </div>

      <nav className='header_nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sts">STS</Link></li>
          {/* <li><Link to="#">Insights</Link></li> */}
          <li><Link to="/hireUs">Hire Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
        </ul>

        <Link to="/register">Donate</Link>
      </nav>

      <div className='menu'>{menu}</div>
      
    </header>
  );
};

export default Header;