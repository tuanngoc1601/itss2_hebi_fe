import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Reviews from "./page/Reviews";
import DetailJob from "./page/DetailJob";
import DetailReview from "./page/DetailReview";

function App() {
  return (
    <div className="min-h-screen h-auto items-center justify-center bg-white">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route exact path="/detail-job/:companyId" element={<DetailJob />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:reviewId" element={<DetailReview />} />
      </Routes>
    </div>
  );
}

export default App;
