import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/footer";
import BannerHome from "./Page/BannerHome/BannerHome";
import routes from "./Routes";
import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    
      {/* <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes> */}
      <Footer />
    </BrowserRouter>
    // <>
    //    <Navbar/>
    //    <Home/>
       
    // </>
 
  );
}

export default App;
