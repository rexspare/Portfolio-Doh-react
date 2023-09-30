import React from 'react'
import { Html, useProgress } from '@react-three/drei';


const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p className='mt-40 text-black font-extrabold dark:text-white text-fivexl'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader