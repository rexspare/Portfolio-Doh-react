import RightNavbar from "../component/RightNavbar"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    initial={{ height: 0}} 
    animate={{ height: "100%"}} 
    exit={{ y: window.innerHeight}}>
      <RightNavbar />
    </motion.div>
  )
}

export default Home
