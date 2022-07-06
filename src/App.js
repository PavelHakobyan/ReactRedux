import React from "react";
import {
  BrowserRouter as Roter,
  Route,
  Routes}
  from 'react-router-dom'

import Menu from "./Components/Menu/Menu";
import About from "./Pages/AboutPage/AboutPage";
import Contact from "./Pages/ContactPage/Contact";
import Corona from "./Pages/Corona/Corona";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";


  export default function App() {
    return (
      <Roter>
        <Menu/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route exact path="/AboutPage" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Corona" element={<Corona/>}/>
          <Route exact path="/Register" element={<Register/>}/> 
        </Routes>
      </Roter>
    );
  }