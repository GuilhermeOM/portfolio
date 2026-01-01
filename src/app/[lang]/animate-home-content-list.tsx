'use client'

import { ArrowDown, ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { type JSX, useState } from 'react'

import { Button } from '@/components/ui/button'

interface AnimateHomeContentListProps {
  children: JSX.Element[]
  defaultLength: number
  minLength: number
}

export default function AnimateHomeContentList({
  children,
  defaultLength,
  minLength = 1,
}: AnimateHomeContentListProps) {
  const [listLength, setListLength] = useState(defaultLength)

  const canIncrease = listLength < children.length
  const canDecrease = listLength > minLength

  function increaseList() {
    if (canIncrease) {
      setListLength((state) => state + 1)
    }
  }

  function decreaseList() {
    if (canDecrease) {
      setListLength((state) => state - 1)
    }
  }

  function handleListItemAnimation(listItem: JSX.Element[]) {
    return listItem.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
        transition={{
          duration: 0.8,
          opacity: {
            delay: 0.2,
          },
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {item}
      </motion.div>
    ))
  }

  return (
    <>
      <ul className="flex flex-col gap-8">
        <AnimatePresence initial={false}>
          {handleListItemAnimation(children.filter((_, i) => i + 1 <= listLength))}
        </AnimatePresence>
      </ul>

      <div className="mt-4 flex w-full justify-center gap-4">
        {canIncrease && (
          <Button size="sm" variant="ghost" onClick={increaseList}>
            <ArrowDown size={12} />
          </Button>
        )}
        {canDecrease && (
          <Button size="sm" variant="ghost" onClick={decreaseList}>
            <ArrowUp size={12} />
          </Button>
        )}
      </div>
    </>
  )
}
