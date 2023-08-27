import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Error from "../pages/Error";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
