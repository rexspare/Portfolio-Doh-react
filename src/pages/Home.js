import RightNavbar from "../component/RightNavbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" , transition: {duration: 0.5} }}
    >
      <div className="flex flex-row gap-x-16 pl-36 h-[100vh]">
        <div className="flex flex-col text-xxl font-prata font-thin justify-center h-full leading-small">
          <Link to="/Projects">
            <span className="font-thin hover:italic hover:translate-x-2 duration-500">
              PROJECTS
            </span>
          </Link>
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
          <Link to="/About">
            <span className="font-thin hover:italic hover:translate-x-2 duration-500">
              ABOUT
            </span>
          </Link>
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
          <Link to="/Contact">
            <span className="font-thin hover:italic hover:translate-x-2 duration-500">
              CONTACT
            </span>
          </Link>
        </div>
        
        <div className="flex flex-col gap-y-2 font-open_sans tracking-widest justify-end mb-52 mx-auto px-10">
          <p className="font-open_sans font-semibold uppercase tracking-widest">
            Dohyeong Kim
          </p>
          <p className="font-thin text-xs">
            "Front-End Developer"
          </p>
        </div>

        {/* <RightNavbar /> */}
      </div>
    </motion.div>
  );
};

export default Home;

