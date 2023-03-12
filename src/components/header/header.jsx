import { NavLink } from "react-router-dom";
import "./header.scss";
import headerLogo from "../../images/brandAssets/logoHeader.svg";

const Header = ({ flip, menuFlip, reset }) => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "STS",
      path: "/sts",
    },
    {
      name: "Hire Us",
      path: "/hire-us",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ];

  return (
    <header className="header desktopMaxWidth">
      <div className="logo">
        <NavLink onClick={reset} to="/">
          <img src={headerLogo} alt="" />
        </NavLink>
      </div>

      <nav
        className={
          flip
            ? "header_nav header_navMobile active"
            : "header_nav header_navMobile"
        }
      >
        <ul>
          {routes.map((item, index) => (
            <li key={index}>
              <NavLink onClick={reset} to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink onClick={reset} to="/register">
          Donate
        </NavLink>
      </nav>

      <div onClick={menuFlip} className="menu">
        <div className={flip ? "hambuger active" : "hambuger"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
