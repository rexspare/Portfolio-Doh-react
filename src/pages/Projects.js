
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";


const Home = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center xl:p-16 2xl:p-28 gap-x-4 bg-[#1A1818] w-full h-full overflow-auto text-white px-10 !pr-16 py-10"
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
    >
      <div className="flex flex-col gap-y-2 md:mx-28 font-prata font-thin mb-28">
        <a target="_blank" rel="noreferrer" href="https://github.com/Doh1024/Maze-solver">
          <div className="flex flex-col">
            <span className="font-prata font-thin text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Maze Solver
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - Maze Solver using backtracking algorithm in java
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://newtone.netlify.app/">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Newtone
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - A website for Newtone School
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Doh1024/Spotify_Com">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Spotify Website
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - Website for looking at your spotify stats using spotify API. Work in progress
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://olivehair.ca/">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Olive Hair
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - Website for client's Hair Salon
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Doh1024/262-a3">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Vue Project
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - Building basic components and pages using vue
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Doh1024/262-group">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Recipe Website
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - A basic recipe website using a cookbook API with nuxt
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Doh1024/sudoku-solver">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              Sudoku Solver
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
               - Sudoku Solver using backtracking in java
            </p>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/darbecker12/cpnt260-final-project">
          <div className="flex flex-col">
            <span className="text-[2.2rem] md:text-[4rem] lg:text-xlx mb-0 p-0 font-prata font-thin hover:italic hover:translate-x-2 duration-0 text-gray-200">
              DDR Shop
            </span>
            <p className="font-open_sans md:-mt-4 text-[0.9rem]">
              - A shop made using pure html and css
            </p>
          </div>
        </a>
      </div>
      <div className="font-open_sans tracking-widest md:w-[52%] lg:w-4/12 !mx-auto pr-10 lg:mr-16 mt-28 mb-20 lg:my-0">
        <p className="font-open_sans font-semibold uppercase tracking-widest">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("\"Projects\"").pauseFor(2000).start()
            }}
          />
        </p>
        <p className="font-thin text-[.8rem] tracking-widest md:mb-20 pt-3 leading-5">
          <div>
              A selected set of projects I've built with teams and alone. This is a mix of web developer project and pure computer science projects.
          </div>
        </p>
      </div>

      {/* <RightNavbar /> */}
    </motion.div>
  );
};

export default Home;