import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/landingPage/HomePage";
import STSPage from "./pages/STS_Page/STS_Page";
import Events from "./pages/events_Page/Events";
import HireUs from "./pages/hireUs_Page/HireUs_Page";
import AboutUs from "./pages/aboutUs_Page/AboutUs_Page";
import Reg from "./pages/registration_Page/Reg";
import "./App.scss";

function App() {
  const [state, setState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location.pathname]);

  const toggleState = () => {
    setState(!state);
  };

  const toFlase = () => {
    setState(false);
  };

  return (
    <div>
      <div
        onClick={toggleState}
        className={state ? "modal active" : "modal"}
      ></div>
      <div className="headerWrapper">
        <Header flip={state} menuFlip={toggleState} reset={toFlase} />
      </div>

      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sts" element={<STSPage />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/hire-us" element={<HireUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/register" element={<Reg />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
