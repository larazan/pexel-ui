import React, { useState, useRef } from "react";

import Pages from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";

const App = () => {
  
  return (
    <div className="font-poppins ">
      {/* <Resume /> */}
      <Router>
          <Navbar />
          <Pages />
          <Footer />
      </Router>
    </div>
  );
};

export default App;
