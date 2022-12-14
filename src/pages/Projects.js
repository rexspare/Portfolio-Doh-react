import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='bg-black' 
    initial={{ height: 0}} 
    animate={{ height: "100%"}} 
    exit={{ y: window.innerHeight}}>
      <h3>Hello Hello</h3>
    </motion.div>
  )
}

export default Projects
