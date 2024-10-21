import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';

const App = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  );
};

export default App;
