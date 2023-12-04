import TimelineItem from '@/app/components/timeline-item'
import VerticalLine from '@/app/components/vertical-line'
import { Typography } from '@/components/ui/typography'
import useMediaQuery from '@/hooks/useMediaQuery'
import { timeLineItems } from '@/lib/constants'
import { cn, getThisYearBirthday } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .25,
      delayChildren: 1.75,
    },
  },
}

const countdownVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const TimelineContent = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const birthday = getThisYearBirthday()
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isPassed, setIsPassed] = useState(false)
  
  useEffect(() => {
    if (birthday.getTime() < new Date().getTime()) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      setIsPassed(true)
      return
    }
    
    const interval = setInterval(() => {
      const now = new Date()
      const distance = birthday.getTime() - now.getTime()
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
    
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <motion.div
      variants={containerVariants}
      initial={'hidden'}
      animate={'show'}
      className='relative flex flex-col justify-center pt-12'
    >
      <motion.div
        variants={countdownVariants}
        className={cn(
          isSmallScreen ? '-mt-3 mb-0' : 'mt-3 mb-6',
          'flex flex-col items-center justify-center text-center',
        )}
      >
        <Typography variant={isSmallScreen ? 'h6' : 'h5'}>
          This event will be held on: {birthday.toLocaleDateString('vi-VN')}
        </Typography>
        <Typography variant={isSmallScreen ? 'h6' : 'h5'}>
          {
            isPassed
              ? 'This event has passed. Hope you had a great time!'
              : `Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
          }
        </Typography>
      </motion.div>
      
      <div className='py-3 max-w-2xl sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0'>
        <div className='relative text-background antialiased text-sm font-semibold'>
          
          <VerticalLine />
          
          {
            timeLineItems.map((timelineItem, index) => (
              <TimelineItem key={index} index={index} item={timelineItem} />
            ))
          }
        
        </div>
      </div>
    </motion.div>
  )
}
export default TimelineContent
