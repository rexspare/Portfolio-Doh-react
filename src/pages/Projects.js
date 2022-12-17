
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

const Home = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <motion.div
      className="flex justify-between items-center xl:p-16 2xl:p-28 gap-x-4 bg-[#1A1818] w-full h-full text-white px-10 -mt-10"
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
    >
      <div className="flex flex-col gap-y-2 mx-28 font-prata font-thin">
        <a href="https://github.com/Doh1024/Maze-solver">
          <div className="flex flex-col">
            <span className="font-prata font-thin text-xlx mb-0 p-0 hover:italic hover:translate-x-2 duration-500 text-gray-200">
              Maze Solver
            </span>
            <p className="font-open_sans -mt-4 text-xl">
              - Maze Solver using backtracking algorithm in java
            </p>
          </div>
        </a>
        <a href="https://github.com/Doh1024/262-a3">
          <div className="flex flex-col">
            <span className="text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-500 text-gray-200">
              Vue Project
            </span>
            <p className="font-open_sans -mt-4 text-xs">
              - Building components and pages using vue
            </p>
          </div>
        </a>
        <a href="https://github.com/Doh1024/262-group">
          <div className="flex flex-col">
            <span className="text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-500 text-gray-200">
              Recipe Website
            </span>
            <p className="font-open_sans -mt-4 text-xs">
              - A recipe website made using Nuxt
            </p>
          </div>
        </a>
        <a href="https://github.com/Doh1024/sudoku-solver">
          <div className="flex flex-col">
            <span className="text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-500 text-gray-200">
              Sudoku Solver
            </span>
            <p className="font-open_sans -mt-4 text-xs">
               - Sudoku Solver using backtracking in java
            </p>
          </div>
        </a>
        <a href="https://github.com/darbecker12/cpnt260-final-project">
          <div className="flex flex-col">
            <span className="text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-500 text-gray-200">
              DDR Shop
            </span>
            <p className="font-open_sans -mt-4 text-xs">
              - A shop made using pure html and css
            </p>
          </div>
        </a>
      </div>
      <div className="font-open_sans tracking-widest w-4/12 mr-16">
        <p className="font-open_sans font-semibold uppercase tracking-widest">
          "PROJECTS"
        </p>
        <p className="font-thin text-xs tracking-widest pt-3 leading-5">
          A selected set of projects I've built with teams and alone. This is a mix of web developer project and pure computer science projects.
        </p>
      </div>

      {/* <RightNavbar /> */}
    </motion.div>
  );
};

export default Home;