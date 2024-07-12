"use client"

import spotifyMono from '@/assets/spotify-primary-logo-rgb-black.png'
import spotifyColored from '@/assets/spotify-primary-logo-rgb-green.png'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function CurrentListening() {
  const { theme } = useTheme()
  let themeInUse = theme

  if (theme === 'system') {
    themeInUse = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          src={themeInUse === 'dark' ? spotifyColored : spotifyMono}
          alt="spotify log"
          width={150}
          height={150}
          className="w-10"
        />
      </div>
      <div>
        <h5 className="text-sm font-semibold">Not playing</h5>
        <p className="text-xs text-muted-foreground">10 minutes ago</p>
      </div>
    </div>
  )
}
