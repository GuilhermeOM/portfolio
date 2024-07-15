'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

import spotifyMono from '@/assets/spotify-primary-logo-rgb-black.png'
import spotifyColored from '@/assets/spotify-primary-logo-rgb-green.png'

interface LogoProps {
  size?: 4 | 10 | 12
}

export default function Logo({ size = 10 }: LogoProps) {
  const { theme } = useTheme()
  let themeInUse = theme

  if (theme === 'system') {
    themeInUse = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return (
    <Image
      src={themeInUse === 'dark' ? spotifyColored : spotifyMono}
      alt="spotify logo"
      width={150}
      height={150}
      style={{ width: `${size / 4}rem`, height: `${size / 4}rem` }}
    />
  )
}
