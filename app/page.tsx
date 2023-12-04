'use client'

import Message from '@/app/components/message'
import TimelineContent from '@/app/components/timeline-content'
import TimelineFooter from '@/app/components/timeline-footer'
import TimelineHeader from '@/app/components/timeline-header'
import FloatingHeartScreen from '@/components/shared/floating-heart-screen'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Container from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import useMediaQuery from '@/hooks/useMediaQuery'
import { messages } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const buttonContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: .5,
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .5,
    },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: .5,
    },
  },
}

const slideInButtonVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const slideOutButtonVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1.25,
    },
  },
}

const itemVariants = {
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

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const [currenIndex, setCurrentIndex] = React.useState(0)
  const [showTimelineButton, setShowTimelineButton] = React.useState(false)
  const [buttonVariants, setButtonVariants] = React.useState(slideInButtonVariants)
  const [showTimeline, setShowTimeline] = React.useState(false)
  
  return (
    <Container className={showTimeline ? '' : 'h-screen'}>
      {
        showTimeline ? (
          <motion.div
            variants={containerVariants}
            initial={'hidden'}
            animate={'show'}
            className={cn(
              isSmallScreen ? 'w-full' : 'w-3/4',
              'flex flex-col justify-center')}
          >
            <Card>
              <motion.div variants={itemVariants}>
                <CardHeader className={'relative'}>
                  <TimelineHeader />
                </CardHeader>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardContent>
                  <TimelineContent />
                </CardContent>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardFooter className={'flex flex-col items-center justify-center'}>
                  <TimelineFooter />
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>
        ) : (
          <>
            <FloatingHeartScreen />
            <div className={'relative w-2/3 h-fit flex flex-col items-center justify-center'}>
              {
                messages.map((message, index) => {
                  return currenIndex == index && (
                    <Message
                      key={index}
                      message={message}
                      onExitComplete={() => {
                        if (index === messages.length - 1) {
                          setShowTimelineButton(true)
                          return
                        }
                        
                        setCurrentIndex(index + 1)
                      }}
                    />
                  )
                })
              }
              <AnimatePresence
                onExitComplete={() => {
                  setShowTimeline(true)
                }}
              >
                {
                  showTimelineButton && (
                    <motion.div
                      variants={buttonContainerVariants}
                      initial={'hidden'}
                      animate={'show'}
                      exit={'hidden'}
                      className={'flex flex-col items-center justify-center gap-4'}
                    >
                      <motion.div variants={textVariants} className={'text-center'}>
                        <Typography variant={isSmallScreen ? 'smallText' : 'p'} className={'leading-tight'}>
                          Wanna see what I&#39;ve prepared for you?
                          <br />
                          Click the button below!
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={buttonVariants}
                        onAnimationComplete={() => setButtonVariants(slideOutButtonVariants)}
                      >
                        <Button onClick={() => setShowTimelineButton(false)}
                        >Show timeline</Button>
                      </motion.div>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          </>
        )
      }
    </Container>
  )
}
