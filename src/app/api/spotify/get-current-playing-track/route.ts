import { getCurrentPlayingTrack } from '@/lib/spotify/get-current-playing-track'

export async function GET() {
  const playingTrack = await getCurrentPlayingTrack()

  if (playingTrack === null) {
    return new Response(null, {
      status: 204,
    })
  }

  return Response.json(playingTrack)
}
