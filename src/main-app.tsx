import { useState } from 'react';

import {HashRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main-app.css'

import { portfolioApp } from './micro-apps/portfolio/portfolio-app';
function App(props: any) {
  return (
      <div className="main-app">
        <Router basename='/'>
          <Routes>
            {portfolioApp.getRoutes()}
          </Routes>
        </Router>
      </div>
  );
}


export default App;
