import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Room from "./Components/Room/Room";


const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Room/:roomId" element ={<Room/>}/>
      </Routes>
    
    </div>
    </>
    
    
  );
};

export default App;
