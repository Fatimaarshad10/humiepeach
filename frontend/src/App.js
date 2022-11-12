import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/shop";
import Commissions from "./components/commissions";
import Delivery from "./components/MainNavbar";
import About from "./components/about";
import Contact from "./components/contacts";
import Watercolor from "./components/watercolor";
import Pencil from "./components/pencil";
import Acrylic from "./components/acrylic";
import Oil from "./components/oil";
import Guides from "./components/guides";
import Sketchbooks from "./components/sketchbooks";
import Prints from "./components/prints";
import ManinImage from "./components/navbar";

function App() {
  return (
    <>
      <ManinImage />  
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/commission" element={<Commissions />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contact />} />
        <Route path="/Watercolour" element={<Watercolor />} />
        <Route path="/Pencil" element={<Pencil />} />
        <Route path="/Acrylic" element={<Acrylic />} />
        <Route path="/Oil" element={<Oil />} />
        <Route path="/Guides" element={<Guides />} />
        <Route path="/Sketchbooks" element={<Sketchbooks />} />
        <Route path="/Prints" element={<Prints />} />
      </Routes>
    </>
  );
}

export default App;
