import { Card, CardContent } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import useMediaQuery from '@/hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const item = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

type Props = {
  message: string
  onExitComplete: () => void
}

const Message = ({ message, onExitComplete }: Props) => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const [visible, setVisible] = React.useState(true)
  
  return (
    <AnimatePresence
      onExitComplete={onExitComplete}
    >
      {
        visible && (
          <motion.div
            variants={item}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            onAnimationComplete={() => {
              setVisible(false)
            }}
          >
            <Card className={'bg-primary/40'}>
              <CardContent className={'pt-6'}>
                <Typography variant={isSmallScreen ? 'h4' : 'h2'} className={'text-center'}>{message}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}
export default Message
