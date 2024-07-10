import spotify from '@/assets/spotify-primary-logo-rgb-green.png'

export default function CurrentListening() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img src={spotify} alt="spotify log" width={150} className="w-10" />
      </div>
      <div>
        <h5 className="text-sm font-semibold">Not playing</h5>
        <p className="text-xs text-muted-foreground">10 minutes ago</p>
      </div>
    </div>
  )
}
