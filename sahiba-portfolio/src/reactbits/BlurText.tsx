import { motion, useReducedMotion } from 'motion/react'

type BlurTextProps = {
  text: string
  delay?: number
  animateBy?: 'words' | 'letters'
  className?: string
}

export default function BlurText({ text, delay = 80, animateBy = 'words', className = '' }: BlurTextProps) {
  const reducedMotion = useReducedMotion()
  const parts = text.split(animateBy === 'words' ? ' ' : '')
  return (
    <p className={className} aria-label={text}>
      {parts.map((part, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          initial={reducedMotion ? false : { opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : index * delay / 1000 }}
        >
          {part}{animateBy === 'words' && index < parts.length - 1 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </p>
  )
}
