import useMediaQuery from '@/hooks/useMediaQuery'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const normalDotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  show: {
    opacity: 1,
    scale: 1,
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const smallDotVariants = {
  hidden: {
    ...normalDotVariants.hidden,
    transform: 'translate(-50%, -100%)',
  },
  show: {
    ...normalDotVariants.show,
    transform: 'translate(-50%, -50%)',
  },
}

const TimelineDot = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  
  return (
    <motion.div
      variants={isSmallScreen ? smallDotVariants : normalDotVariants}
      className={'timeline_dot'}
    ></motion.div>
  )
}
export default TimelineDot
