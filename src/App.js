import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import DetailJob from "./page/DetailJob";

function App() {
  return (
    <div className="min-h-screen h-auto items-center justify-center bg-white">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route exact path="/detail-job/:companyId" element={<DetailJob />} />
      </Routes>
    </div>
  );
}

export default App;
