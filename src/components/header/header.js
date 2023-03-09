// import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import headerLogo from '../../images/brandAssets/logoHeader.svg';

let menu = <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="#D9D9D9"/>
              <rect y="6" width="20" height="2" rx="1" fill="#D9D9D9"/>
              <rect y="12" width="20" height="2" rx="1" fill="#D9D9D9"/>
            </svg>


const Header = ({flip, menuFlip, reset }) => {


  return (
    <header className='header'>
      <div className="logo">
        <Link onClick={reset} to="/">
        <img src={headerLogo} alt=""/>
        </Link>
      </div>

      <nav className={flip ? 'header_nav header_navMobile active' : 'header_nav header_navMobile'}>
        <ul>
          <li><Link onClick={reset} to="/">Home</Link></li>
          <li><Link onClick={reset} to="/sts">STS</Link></li>
          {/* <li><Link to="#">Insights</Link></li> */}
          <li><Link onClick={reset} to="/hireUs">Hire Us</Link></li>
          <li><Link onClick={reset} to="/events">Events</Link></li>
          <li><Link onClick={reset} to="/aboutUs">About Us</Link></li>
        </ul>

        <Link onClick={reset} to="/register">Donate</Link>
      </nav>

      <div onClick={menuFlip} className='menu'>
        <div className={flip ? 'hambuger active' : 'hambuger' }>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
    </header>
  );
};

export default Header;