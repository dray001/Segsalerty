import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="headerWrapper">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
