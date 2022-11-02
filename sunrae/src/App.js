import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    //following the BEM convention
    <div className="app">
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<h1>profile page</h1>} />
          <Route path="/orders" element={<h1>orders page</h1>} />
          <Route path="/checkout" element={<><Header/><Checkout /></>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
