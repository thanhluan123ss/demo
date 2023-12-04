import { motion, Variants } from 'framer-motion'
import React from 'react'

const verticalLineVariants: Variants = {
  hidden: {
    height: '0%',
  },
  show: {
    height: '100%',
    transition: {
      duration: 1.25,
    },
  },
}

const VerticalLine = () => {
  return (
    <motion.div
      variants={verticalLineVariants}
      className='hidden sm:block w-0.5 bg-primary absolute h-full left-1/2 transform -translate-x-1/2'
    ></motion.div>
  )
}
export default VerticalLine
