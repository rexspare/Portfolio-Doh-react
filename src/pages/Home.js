import { ThemeContext } from "../component/ThemeContext"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useContext } from "react"
import 'font-awesome/css/font-awesome.min.css'


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
        <div className="flex flex-col mt-16 text-[2.5rem] sm:text-xlx lg:text-xxl font-prata font-thin justify-center h-full leading-small ">
          <Link to="/Projects">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-dark-text">
              PROJECTS
            </span>
          </Link>
          <hr class="h-px bg-gray-700 border-0 dark:bg-dark-text"/>
          <Link to="/About">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-dark-text">
              ABOUT
            </span>
          </Link>
          <hr class="h-px bg-gray-700 border-0 dark:bg-dark-text"/>
          <Link to="/Contact">
            <span className="font-thin hover:italic hover:translate-x-2 duration-0 dark:text-dark-text">
              CONTACT
            </span>
          </Link>
        </div>
        {/*flex flex-col gap-y-2 font-open_sans tracking-widest justify-end mb-52 mx-auto px-10 */}
        
          <div className="flex flex-col gap-y-2 font-open_sans tracking-widest text-[0.8rem] md:text-[1rem] mb-[10rem] md:mb-0 md:mt-72 mx-auto">
            <p class="line" className="font-open_sans dark:text-dark-text font-semibold uppercase tracking-widest ml-1">
              <div>
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Dohyeong Kim").pauseFor(2000).start()
                }}
              />
              </div>
            </p>
            <p className="font-thin text-xs dark:text-dark-text">
              <div>
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("\"Frontend Developer\"").pauseFor(2000).start()
                }}
              />
              </div>
            </p>
          </div>
          
          <div>
            <button className="mt-16 mx-auto mb-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:mb-5" onClick={() => setIsDark(!isDark)}>
              {isDark ? <i className="fa fa-moon-o fa-2x" aria-hidden="true"></i> : <i className="fa fa-sun-o fa-2x" aria-hidden="true"></i>}
            </button>
          </div>
      </div>

        {/* <RightNavbar /> */}
    </motion.div>
  );
};

export default Home;
