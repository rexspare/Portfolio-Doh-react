import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
   >
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="max-h-96 md:h-screen">
            <motion.p className='font-nanum font-thin text-lxl pl-24 pt-10'
            initial={{ y: "-200%"}}
            animate={{ y: 0 , transition: {delay: .6}}}>
              안녕하세요.
            </motion.p> 
          </div>
          <div className="flex bg-off-white">
            <div className="mb-auto mt-auto max-w-lg">
              <h1 className="text-3xl font-semibold uppercase">Dohyeong Kim</h1>
              <hr className="h-px w-32 bg-gray-200 border-0 dark:bg-gray-700"/>
              <p className="font-thin mb-5">"Front-End Developer"</p>
              <p>I'm a Junior Front-End Developer located in Canada who has a big passion for animations, UI effects
              , Web designs and Web functionality.</p>
              <p className='pt-3'>I have experiences in multiple languages and frameworks such as Java, C, Js, Vue.js, Nuxt.js, and React.js.</p>
              <p className='pt-3'>Curiosity is one of my main motivator with creativity as my triumph. I'm a well organised person, problem solver,
                and a independent employee with high attention to detail. I'm a huge fan of NBA, gaming, movies and music.
              </p>
            </div>
          </div>
        </div>
        <motion.div className='absolute bottom-0 right-0 pb-28 font-prata font-thin text-lxl'
        initial={{ y: "100%"}}
        animate={{ y: 0 , transition: {delay: .6}}}
        >Hello.</motion.div>
      </div>
      
    </motion.div>
    
  );
};
  
export default About;