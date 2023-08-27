import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-off-white dark:bg-dark-bg">
        <h1 className="text-big font-extrabold text-black dark:text-white tracking-widest">404</h1>
        <div class="bg-white dark:bg-black px-2 dark:text-white text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-light-purple group active:text-light-purple focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-light-purple group-hover:translate-y-0 group-hover:translate-x-0">
            </span>
            <span className="relative block px-8 py-3 bg-dark-cyan border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </div>
        </button>
      </main>
    </div>
  )
}

export default Error