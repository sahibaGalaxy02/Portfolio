import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type FadeContentProps = {
  children: ReactNode
  blur?: boolean
  duration?: number
  delay?: number
  className?: string
}

export default function FadeContent({ children, blur = false, duration = 1000, delay = 0, className = '' }: FadeContentProps) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reducedMotion ? 0 : duration / 1000, delay: reducedMotion ? 0 : delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}
