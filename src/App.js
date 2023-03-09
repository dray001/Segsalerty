import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from "./pages/landingPage/HomePage";
import STS_Page from "./pages/STS_Page/STS_Page";
import Events from './pages/events_Page/Events'
import HireUs from './pages/hireUs_Page/HireUs_Page'
import AboutUs from './pages/aboutUs_Page/AboutUs_Page'
import Reg from './pages/registration_Page/Reg'
import './App.scss';

function App() {

  const [state, setState] = useState(false);

  const toggleState =()=> {
    setState(!state);
  }

  const toFlase =()=> {
    setState(false);
  }

  console.log(state);

  return (
    <div>
      <div onClick={toggleState} className={state ? 'modal active' : 'modal'}></div>
      <div className='headerWrapper'>     
        <Header flip = {state} menuFlip = {toggleState} reset = {toFlase} />
      </div>

      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sts" element={<STS_Page />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/hireUs" element={<HireUs />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/register" element={<Reg />} />
        </Routes>
      </main>

    <Footer/>
    </div>
  );
}

export default App;
