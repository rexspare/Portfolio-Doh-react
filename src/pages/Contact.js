import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovkjge");
  if (state.succeeded) {
      return <p class="md:text-base flex item-center my-auto padding-10 justify-center mx-auto font-open_sans font-semibold leading-relaxed text-xs">Thanks for your email! I will get back to you as soon as possible.</p>;
  }
  return (
    <motion.div className='mx-auto my-auto font-open_sans font-semibold' 
      initial={{ y: "100%" }}
      animate={{ y: 0 , transition: {duration: 0.5} }}
      exit={{ y: window.innerHeight}}
     >
      <form onSubmit={handleSubmit}>
        <section className="text-gray-700 dark:text-dark-text body-font relative mx-auto">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-4xl font-open_sans font-semibold  title-font mb-4 text-gray-900 dark:text-dark-text">
                Contact Me
              </h1>
              <p className="lg:w-2/3 mx-auto font-open_sans font-semibold leading-relaxed text-base">
              If you'd like to find out even more about me, what I can do for you, or just to chat, drop me a message below and I'll get back to you as soon as I can!
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label for="name" htmlFor="name" className="leading-7 text-sm dark:text-dark-text text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      htmlFor='email'
                      className="leading-7 text-sm dark:text-dark-text text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm dark:text-dark-text text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="mx-auto mt-2">
                  <button type="submit" disabled={state.submitting} className="relative px-6 py-3 font-bold text-black group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                    <span className="relative">Send it!</span>
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <p className='font-open_sans font-semibold'>dohyeongkim001024@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </motion.div>
  )
}


export default Contact
