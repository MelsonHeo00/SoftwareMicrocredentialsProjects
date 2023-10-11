import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import MainPage from './components/mainpage';
import About from './components/about';
import Seafood from './components/seafood'; 
import Desserts from './components/desserts'; 
import Bars from './components/bars'; 
import Others from './components/others';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/bars" element={<Bars />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

