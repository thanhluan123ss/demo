import { cn } from '@/lib/utils'
import * as React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={cn(
          'w-full bg-gray py-16 md:py-20 2xl:py-24',
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className='mx-auto flex w-full h-full max-w-7xl flex-col items-center justify-center gap-6 px-4 md:gap-12 md:px-8'>
          {children}
        </div>
      </section>
    )
  },
)

Container.displayName = 'Container'

export default Container
