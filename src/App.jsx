import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Apidocumentation from "./pages/Apidocumentation";
import Mainpage from "./pages/Mainpage";
import Navbar from "./components/Navigation/Navbar";
import Headroom from "react-headroom";
import Modal from "./components/Navigation/Modal";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Router>
        {" "}
        <Headroom
          style={{
            webkitTransition: "all 0.8s ease-in-out",
          }}
        >
          <Navbar
            setShowModal={setShowModal}
            setShowMenu={setShowMenu}
            showModal={showModal}
          />
        </Headroom>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <AnimatePresence wait>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage showModal={showModal} setShowModal={setShowModal} />
              }
            />
            <Route path="/main" element={<Mainpage />} />
            <Route path="/api" element={<Apidocumentation />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
