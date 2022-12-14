import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='bg-amber-200' initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}}>
      <h3>Hello Hello</h3>
    </motion.div>
  )
}

export default Projects
