import { motion } from 'framer-motion'
import { useForm } from '@formspree/react';
import '../styles/contact.css'
import Stars from '../component/canvas/Stars'

import { EarthCanvas } from '../component/canvas';
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovkjge");
  if (state.succeeded) {
      return <p class="md:text-base flex item-center text-black my-auto padding-10 justify-center mx-auto font-open_sans font-semibold leading-relaxed dark:dark-text text-xs">Thanks for your email! I will get back to you as soon as possible.</p>;
  }
  return (
    <div>
      <motion.div className='mx-auto my-auto font-open_sans font-semibold' 
        initial={{ y: "100%" }}
        animate={{ y: 0 , transition: {duration: 0.5} }}
        exit={{ y: window.innerHeight}}
      >
          <header className='text-black dark:text-dark-text font-prata'>Contact me!</header>

          <form onSubmit={handleSubmit} id="form" class="topBefore">
            <input  id="name" name='name' type="text" placeholder='NAME'/>
            <input id="email" name='email' type="text" placeholder='E-MAIL'/>
            <textarea id="message" name='message' type="text" placeholder='MESSAGE'></textarea>
            <button class="button" disabled={state.submitting} id="submit" type="submit"> GO!</button>
          </form>

          <div className="p-2 w-3/4 ml-7 sm:ml-0 sm:w-full pt-8 mt-8 border-t border-black dark:border-gray-200 text-center">
            <p className='font-open_sans dark:text-dark-text font-semibold'>dohyeongkim001024@gmail.com</p>
          </div>    
      </motion.div>
        
      <motion.div variants={slideIn('right', "tween", 0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
        <Stars/>
      </motion.div>
    </div>
    
  )
}


export default Contact
