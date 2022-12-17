import RightNavbar from "../component/RightNavbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" , transition: {duration: 0.5} }}
    >
      {/*flex flex-row gap-x-16 pl-36 h-[100vh]*/}
      {/*flex flex-col text-7xl xl:text-8xl 2xl:text-9xl gap-y-2 font-prata font-thin justify-center h-full*/}
      <div className="flex items-center box-border p-16 2xl:p-28 justify-between w-full h-screen">
        <div className="flex flex-col text-sevenxl 2xl:text-xxl font-prata font-thin justify-center h-full leading-small">
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
        {/*flex flex-col gap-y-2 font-open_sans tracking-widest justify-end mb-52 mx-auto px-10 */}
        <div className="flex flex-col gap-y-2 font-open_sans tracking-widest mt-72 mx-auto">
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

