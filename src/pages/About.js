import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

import { styles } from '../styles/styles';
import { ComputersCanvas } from '../component/canvas';

import { fadeIn, textVariant } from '../utils/motion';
import Experience from '../component/Experience';
import Tech from '../component/Tech';
import Stars from '../component/canvas/Stars'


const About = () => {
  return(
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-black dark:bg-[#B06969]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-black dark:from-[#B06969]'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black dark:text-[#EDDEDE]`}>Hi, I'm <span className='text-[#D97B08] dark:text-[#B06969]'>Doh,</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black dark:text-[#EDDEDE]`}><Typewriter
            onInit={(typewriter) => {
            typewriter.pauseFor(1000).typeString("I'm a Front End Developer.").pauseFor(2000).deleteChars(20).typeString("Athlete.").pauseFor(2000).deleteChars(8).typeString("Gamer.").pauseFor(2000).deleteChars(6).typeString("Designer.").start()
            }}
          /></p>
        </div>  
      </div>
      <ComputersCanvas />

      <>
        <div className={`${styles.padding} max-w-7xl`}>
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider dark:text-[#EDDEDE]">
              Introduction
            </p>
            <h2 className="text-[#D97B08] dark:text-[#B06969] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Overview.
            </h2>
          </motion.div>     
          <motion.p variants={fadeIn("", "", 0.1,1)}
            className='mt-4 text-black text-[17px] max-w-3xl dark:text-[#EDDEDE] leading-[30px]'
          >
            I'm a skilled Front End Developer with experiences in Java and Javascript, and expertise in frameworks like React. 
            you'll find a collection of my finest work as a front-end developer. Explore a fusion of creativity and code, showcasing responsive web designs and user-friendly interfaces that make a lasting impact.
          </motion.p> 
        </div>
      </>      
      <Experience />
      <Tech />
      <Stars />
    </section>
  )
};
  
export default About;

/*
     <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
      className={isDark ? 'dark' : ''}
   >
      <div className="container justify-items-center h-screen p-3 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:max-h-96 ">
            <motion.p className='font-nanum font-thin text-[3rem] text-black dark:text-dark-text md:text-[4rem] xl:text-[5rem] pt-5 md:pt-10'
            initial={{ y: "-200%"}}
            animate={{ y: 0 , transition: {delay: .6}}}>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).typeString("Hello.").pauseFor(2000).deleteAll().typeString("안녕하세요.").start()
              }}
              />
            </motion.p> 
          </div>
        <div className="flex justify-center items-center text-black dark:text-dark-text bg-off-white dark:bg-dark-bg pr-12 md:pr-0">
          <div className="lg:my-auto max-w-lg">
            <h1 className="text-3xl font-semibold uppercase">Dohyeong Kim</h1>
            <hr className="h-px w-32 bg-black border-0 dark:bg-dark-text"/>
            <p className="font-thin mb-5 ">"Front-End Developer"</p>
            <p>I'm a Junior Front-End Developer located in Canada who has a big passion for animations, UI effects
            , Web designs and Web functionality.</p>
            <p className='pt-3'>I have experiences in multiple languages and frameworks such as Java, C, Js, Vue.js, Nuxt.js, and React.js.</p>
            <p className='pt-3'>Curiosity is one of my main motivator with creativity as my triumph. I'm a well organised person, problem solver,
              and a independent employee with high attention to detail. I'm a huge fan of NBA, gaming, movies and music.
            </p>
          </div>
        </div>
      </div>
      
    </motion.div>


    -----------------------------------
    
      const {isDark} = useContext(ThemeContext);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (scrollY > 50) {
        controls.start({ opacity: 0, y: -100 });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, scrollY]);

  return (
    <div>
      <div className='flex-col text-fivexl mr-16 mt-5 font-nanum font-thin leading-normal dark:text-white'>
        <p>Hello,</p>
        <p>I'm Doh,</p>
        <div className='relative w-max min-w-[180px]'>
          <span className="opacity-0 absolute inset-0">Front End Developer.</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).typeString("Front End Developer.").pauseFor(2000).deleteAll().typeString("Programmer.").pauseFor(2000).deleteAll().typeString("Gamer.").pauseFor(2000).deleteAll().typeString("Designer.").start()
            }}
          />
        </div>
      </div>

      <div>
        <p>Skills & Experience</p> 
        <p>The main area of expertise is front end development (client side of the web).
          HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.</p>
      </div>
    </div>
  );          
 
 */