import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import BannerHome from "./Page/BannerHome/BannerHome";
import route from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {route.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <BannerHome />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
