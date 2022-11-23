import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Checkout, ErrorPage, Home, Products, SignIn } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
