import { ThemeContext } from "../component/ThemeContext"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useContext } from "react"


const Home = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" , transition: {duration: 0.5} }}
      className={isDark ? 'dark' : ''}
    >
      {/*flex flex-row gap-x-16 pl-36 h-[100vh]*/}
      {/*flex flex-col text-7xl xl:text-8xl 2xl:text-9xl gap-y-2 font-prata font-thin justify-center h-full*/}
      <div className="flex flex-col md:flex-row items-center box-border p-16 2xl:p-28 justify-center md:justify-between w-full h-screen">
        <div className="flex flex-col mt-16 text-[2.5rem] sm:text-xlx lg:text-xxl font-prata font-thin justify-center h-full leading-small">
          <Link to="/Projects">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-white">
              PROJECTS
            </span>
          </Link>
          <hr class="h-px bg-gray-700 border-0 dark:bg-white"/>
          <Link to="/About">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-white">
              ABOUT
            </span>
          </Link>
          <hr class="h-px bg-gray-700 border-0 dark:bg-white"/>
          <Link to="/Contact">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-white">
              CONTACT
            </span>
          </Link>
        </div>
        {/*flex flex-col gap-y-2 font-open_sans tracking-widest justify-end mb-52 mx-auto px-10 */}
        
          <div className="flex flex-col gap-y-2 font-open_sans tracking-widest text-[0.8rem] md:text-[1rem] mt-[2rem] md:mt-72 mx-auto">
            <p class="line" className="font-open_sans dark:text-white font-semibold uppercase tracking-widest ml-1">
              <div>
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Dohyeong Kim").pauseFor(2000).start()
                }}
              />
              </div>
            </p>
            <p className="font-thin text-xs dark:text-white">
              <div>
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("\"Frontend Developer\"").pauseFor(2000).start()
                }}
              />
              </div>
            </p>
          </div>
          
          {/*<div>
            <button onClick={() => setIsDark(!isDark)}>
              Toggle {isDark ? 'Light' : 'Dark'} Mode
            </button>
              </div>*/}
      </div>

        {/* <RightNavbar /> */}
    </motion.div>
  );
};

export default Home;
