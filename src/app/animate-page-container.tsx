"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface AnimatePageContainerProps {
  children: ReactNode
}

export default function AnimatePageContainer({ children }: AnimatePageContainerProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          opacity: {
            delay: 0.5,
          },
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mx-auto flex flex-col gap-8"
      >
        {children}
      </motion.div>
      </AnimatePresence>
  )
}