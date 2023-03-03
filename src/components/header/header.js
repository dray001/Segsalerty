import React from 'react';
// import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import headerLogo from '../../images/brandAssets/logoHeader.svg';

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

        <Link href="#">Donate</Link>
      </nav>
    </header>
  );
};

export default Header;