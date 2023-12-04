import { heartSize } from '@/lib/constants'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .17,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    top: -100,
    opacity: 1,
  },
  show: {
    top: ['30vh', '35vh', '40vh', '45vh', '50vh'][Math.floor(Math.random() * 5)],
    opacity: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      repeat: Infinity,
    },
  },
}

const AnimatedHeart = () => {
  const [left, setLeft] = React.useState<number>(0)
  
  React.useEffect(() => {
    setLeft(Math.random() * 100)
  }, [])
  
  return (
    <motion.div
      variants={itemVariants}
      style={{
        position: 'absolute',
        left: `${left}vw`,
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
        <path
          fill={'#ff0055'}
          d='M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z'></path>
      </svg>
    </motion.div>
  )
}

const FloatingHeartScreen = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial={'hidden'}
      animate={'show'}
      className={'absolute w-screen h-screen flex justify-center items-center overflow-hidden'}>
      {
        Array.from(Array(heartSize).keys()).map((i) => (
          <AnimatedHeart key={i} />
        ))
      }
    </motion.div>
  )
}
export default FloatingHeartScreen
