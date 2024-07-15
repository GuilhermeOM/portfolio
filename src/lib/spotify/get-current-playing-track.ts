import { auth } from './auth'

interface Context {
  external_urls: {
    spotify: string
  }
  href: string
  type: string
  uri: string
}

interface Artist {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface Image {
  height: number
  url: string
  width: number
}

interface Album {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

interface Item {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

interface Actions {
  disallows: {
    resuming: boolean
  }
}

export interface GetCurrentPlayingTrack {
  timestamp: number
  context: Context
  progress_ms: number
  item: Item
  currently_playing_type: string
  actions: Actions
  is_playing: boolean
}

export async function getCurrentPlayingTrack(): Promise<GetCurrentPlayingTrack> {
  const spotifyAuth = await auth()

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${spotifyAuth.access_token}`,
    },
    next: {
      revalidate: 0,
    },
  }).then((response) => {
    if (response.status === 204 || response.status >= 400) {
      return null
    }

    return response.json()
  })
}
