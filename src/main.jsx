import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "./pages/Series";
import Navbar from "../components/Navbar";
import DetailsSeries from "./pages/DetailsSeries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/movies/:id" element={<Details />} />
      <Route path="/details/series/:id" element={<DetailsSeries />} />
      <Route path="/series" element={<Series />} />
      </Routes>
  </BrowserRouter>
);
