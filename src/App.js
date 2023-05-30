import React from "react";

import {Route, Routes} from "react-router-dom";
import Profile from "./page/Profile";
import Home from "./page/Home";

import "./App.css";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/profile" element = {<Profile/>}/>
  </Routes>
  </>
  );
}

export default App;
