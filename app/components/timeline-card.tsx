import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import { TimelineItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const timelineCardVariants = (i: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: i % 2 == 0 ? '5%' : '-5%',
    },
    show: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: .5,
        ease: 'easeOut',
        staggerChildren: .25,
        delayChildren: .25,
      },
    },
  }
}

const slideUpVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1,
      ease: 'easeOut',
    },
  },
}

type Props = {
  index: number
  item: TimelineItem
}

const TimelineCard = ({ index, item }: Props) => {
  return (
    <motion.div
      variants={timelineCardVariants(index)}
      className={cn(
        'flex w-full mx-auto items-center',
        index % 2 === 0 ? 'justify-start' : 'justify-end',
      )}
    >
      <div className={cn(
        'w-full sm:w-1/2',
        index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8',
      )}>
        <div
          className='p-4 border-white border-dotted border-2 rounded shadow'
        >
          <motion.div
            variants={slideUpVariants}
          >
            <Typography className={'text-primary'}>
              {item.time}
            </Typography>
            <Separator className='mt-0 mb-3.5 bg-primary' />
          </motion.div>
          <motion.div
            variants={slideUpVariants}
          >
            <Typography variant={'p'} className={'!m-0 leading-tight'}>
              {item.description}
            </Typography>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
export default TimelineCard
