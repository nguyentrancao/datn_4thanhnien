import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/footer.js";
import AllRoute from "./Component/route.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
