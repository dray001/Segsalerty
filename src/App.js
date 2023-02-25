import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from "./pages/landingPage/HomePage";
import STS_Page from "./pages/STS_Page/STS_Page";
import './App.scss';

function App() {
  return (
    <div>
      <div className='headerWrapper'>     
        <Header/>
      </div>

      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sts" element={<STS_Page />} />
        </Routes>
      </main>

    <Footer/>
    </div>
  );
}

export default App;
