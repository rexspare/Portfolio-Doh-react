import React, { useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AnimatedRoutes from "./component/AnimatedRoutes";
import RightNavbar from "./component/RightNavbar";

const App = () => {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <Router>
        <div className="flex flex-row w-full h-full align-center items-start justify-between mx-0">
          <AnimatedRoutes />
          <div className="min-h-screen bg-red-300">
            <RightNavbar />
          </div>
        </div>
      </Router>
    )
  );
};

export default App;
