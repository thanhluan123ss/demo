import { Typography } from '@/components/ui/typography'
import useMediaQuery from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'
import { Alex_Brush, Bodoni_Moda } from 'next/font/google'
import React from 'react'

const bodoniModa = Bodoni_Moda({ subsets: ['latin'], display: 'auto' })
const alexBrush = Alex_Brush({ weight: '400', subsets: ['latin'] })

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
}

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const swayVariants: Variants = {
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: 2,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const TimelineHeader = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  
  return (
    <motion.div
      variants={containerVariants}
      initial={'hidden'}
      animate={'show'}
    >
      <motion.div variants={titleVariants}>
        <motion.div
          variants={swayVariants}
          className={'relative'}
        >
          <Typography
            variant={isSmallScreen ? 'h2' : 'h1'}
            className={cn(
              bodoniModa.className,
              'text-center font-bold uppercase tracking-wider !leading-tight z-10 stroke-2',
            )}
          >
            CamNhung&#39;s <br /> Birthday Celebration
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div variants={subtitleVariants}>
        <Typography
          className={cn(
            alexBrush.className,
            isSmallScreen ? 'text-6xl -bottom-2' : 'text-8xl -bottom-10',
            'absolute left-1/2 -translate-x-1/2',
            'text-center tracking-widest text-primary',
          )}
        >
          Timeline
        </Typography>
      </motion.div>
    </motion.div>
  )
}
export default TimelineHeader
