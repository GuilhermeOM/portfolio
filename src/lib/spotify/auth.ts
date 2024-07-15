import { env } from '@/env'

interface SpotifyAuth {
  access_token: string
  token_type: Readonly<'Bearer'>
  expires_in: number
  scope: string
}

const clientId = env.SPOTIFY_CLIENT_ID
const clientSecret = env.SPOTIFY_CLIENT_SECRET
const refreshToken = env.SPOTIFY_REFRESH_TOKEN
const credentials = Buffer.from(clientId + ':' + clientSecret).toString('base64')

export async function auth() {
  const body = new URLSearchParams()
  body.append('grant_type', 'refresh_token')
  body.append('refresh_token', refreshToken)

  const authentication: Promise<SpotifyAuth> = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + credentials,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    next: {
      revalidate: 60 * 10, // 10 min
    },
  }).then((response) => response.json())

  return authentication
}
