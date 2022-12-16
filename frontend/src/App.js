import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/shop";
import Detail from "./components/detail";
import FirstNavbar from "./components/navbar";
import SecoundNavbar from "./components/navbar2";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <FirstNavbar />
        <SecoundNavbar />
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Watercolour/product/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
