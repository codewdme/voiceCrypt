import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Apidocumentation from "./pages/Apidocumentation";
import Mainpage from "./pages/Mainpage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/api" element={<Apidocumentation />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
