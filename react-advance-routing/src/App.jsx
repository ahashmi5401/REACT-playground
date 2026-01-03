import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/404Page";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Shop page */}
        <Route path="/shop" element={<Shop />} />
        
        {/* Product detail page opens separately */}
        <Route path="/shop/:id" element={<ProductDetail />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
