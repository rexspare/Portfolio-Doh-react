import { Routes, Route, Link, useLocation} from "react-router-dom";
import Projects from "../pages/Projects"
import About from "../pages/About"
import Home from "../pages/Home"

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Home /> } />
          <Route path="/Projects" element={ <Projects />}/>
          <Route path="/About" element={ <About />}/>
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes
