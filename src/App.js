import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import AgriInput from "./pages/AgriInput";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/agri-input"
          element={
            <>
              <Navbar />
              <AgriInput />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
