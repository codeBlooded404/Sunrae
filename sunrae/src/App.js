import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Checkout from './Checkout';

function App() {
  return (
    //following the BEM convention
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<h1>login page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
