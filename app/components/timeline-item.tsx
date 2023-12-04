import TimelineCard from '@/app/components/timeline-card'
import TimelineDot from '@/app/components/timeline-dot'
import { timeLineItems } from '@/lib/constants'
import { TimelineItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .5,
    },
  },
}

type Props = {
  index: number
  item: TimelineItem
}

const TimelineItem = ({ index, item }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      className={cn(
        'mt-6 sm:mt-0 mb-12',
        index == 0 && 'pt-6 sm:pt-12',
        index == timeLineItems.length - 1 && '!m-0 pb-6 sm:pb-12',
      )}
    >
      <div className='flex flex-col sm:flex-row items-center'>
        <TimelineDot />
        <TimelineCard index={index} item={item} />
      </div>
    </motion.div>
  )
}
export default TimelineItem
