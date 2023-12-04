import { Typography } from '@/components/ui/typography'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import React from 'react'

const textVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const bounceVariants = {
  hidden: {
    y: 0,
    transtion: {
      delay: 3,
    }
  },
  show: {
    y: -10,
    transition: {
      y: {
        type: 'tween',
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
      staggerChildren: 1,
    },
  },
}

const TimelineFooter = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  
  return (
    <motion.div
      variants={bounceVariants}
      className={'flex flex-col items-center justify-center'}
    >
      <motion.div variants={textVariants}>
        <Typography variant={isSmallScreen ? 'smallText' : 'p'}>
          Made with ❤️ by your boyfriend - Koi
        </Typography>
      </motion.div>
      <motion.div variants={textVariants}>
        <Typography variant={isSmallScreen ? 'smallText' : 'p'}>
          Hope you have a great day!
        </Typography>
      </motion.div>
      <motion.div variants={textVariants}>
        <Typography variant={isSmallScreen ? 'smallText' : 'p'}>
          If you love this, please inbox me and say &#34;Em yêu anh ❤️&#34;
        </Typography>
      </motion.div>
    </motion.div>
  )
}
export default TimelineFooter
