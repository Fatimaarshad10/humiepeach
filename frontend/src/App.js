import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/shop";
import Detail from "./components/detail";
import MainNavbar from "./components/navbar";
import MdNavbar from "./components/navbar2";

function App() {
  return (
    <>
    
     <div>
     <MainNavbar />  
      <MdNavbar/>
      <Routes>
      <Route path="/Shop" element={<Shop />} />
        
        <Route path="/Watercolour/product/:id" element={<Detail/>} />
      

        
      </Routes>
      
      
      
     </div>
    </>
  );
}

export default App;
