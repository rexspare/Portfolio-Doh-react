import { motion } from 'framer-motion'
import { useContext } from "react"
import { ThemeContext } from "../component/ThemeContext"

const About = () => {
  const {isDark} = useContext(ThemeContext);

  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
      className={isDark ? 'dark' : ''}
   >
      <div className="container justify-items-center h-screen p-3 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:max-h-96 ">
            <motion.p className='font-nanum font-thin text-[3rem] dark:text-white md:text-[4rem] xl:text-[5rem] pt-5 md:pt-10'
            initial={{ y: "-200%"}}
            animate={{ y: 0 , transition: {delay: .6}}}>
              안녕하세요.
            </motion.p> 
          </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 max-h-screen gap-20">
        </div> */}
        <div className="flex justify-center items-center dark:text-white bg-off-white dark:bg-dark-bg pr-12 md:pr-0">
            <div className="lg:my-auto max-w-lg">
              <h1 className="text-3xl font-semibold uppercase">Dohyeong Kim</h1>
              <hr className="h-px w-32 bg-gray-200 border-0 dark:white"/>
              <p className="font-thin mb-5 ">"Front-End Developer"</p>
              <p>I'm a Junior Front-End Developer located in Canada who has a big passion for animations, UI effects
              , Web designs and Web functionality.</p>
              <p className='pt-3'>I have experiences in multiple languages and frameworks such as Java, C, Js, Vue.js, Nuxt.js, and React.js.</p>
              <p className='pt-3'>Curiosity is one of my main motivator with creativity as my triumph. I'm a well organised person, problem solver,
                and a independent employee with high attention to detail. I'm a huge fan of NBA, gaming, movies and music.
              </p>
            </div>
          </div>
        {/* <motion.div className='absolute bottom-0 -right-30 pb-28 font-prata font-thin text-lxl'
        initial={{ y: "100%"}}
        animate={{ y: 0 , transition: {delay: .6}}}
        >Hello.</motion.div> */}
        <div className="flex flex-end items-end">
          <motion.div className='font-prata dark:text-white font-thin text-[3rem] md:text-[4rem] xl:text-[5rem]'
          initial={{ y: "100%"}}
          animate={{ y: 0 , transition: {delay: .6}}}
          >Hello.</motion.div>
        </div>
      </div>
      
    </motion.div>
    
  );
};
  
export default About;