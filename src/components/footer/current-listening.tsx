import spotifyMono from '@/assets/spotify-primary-logo-rgb-black.png'
import spotifyColored from '@/assets/spotify-primary-logo-rgb-green.png'

import { useTheme } from '../theme/theme-provider'

export default function CurrentListening() {
  const { theme } = useTheme()
  let themeInUse = theme

  if (theme === 'system') {
    themeInUse = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return (
    <div className="flex items-center gap-2">
      <div>
        <img
          src={themeInUse === 'dark' ? spotifyColored : spotifyMono}
          alt="spotify log"
          width={150}
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
