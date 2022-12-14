import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import AnimatedRoutes from './component/AnimatedRoutes';


const App = () => {

  const [loading, setLoading] = useState(true);
  const loader = document.getElementById('loader')
  if(loader){
    setTimeout(() => {
      loader.style.display = "none"
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/Projects"> projects </Link>
          <Link to="/About"> about </Link>
        </div>
        <AnimatedRoutes />
      </Router>
    )
  );
}

export default App;
