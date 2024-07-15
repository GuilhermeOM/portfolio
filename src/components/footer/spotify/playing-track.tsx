'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ReactNode } from 'react'
import useSWR from 'swr'

import { getDictionary } from '@/lib/i18n/get-dictionary'
import { GetCurrentPlayingTrack } from '@/lib/spotify/get-current-playing-track'

const SpotifyLogo = dynamic(() => import('./logo'), {
  ssr: false,
})

interface AnimateTextProps {
  children: ReactNode
  stringContent: string
  as: 'title' | 'caption'
}

function AnimateText({ children, stringContent, as = 'title' }: AnimateTextProps) {
  const twStyle = as === 'title' ? 'text-sm font-semibold' : 'text-xs text-muted-foreground'

  const isSmallerDevices = document.documentElement.clientWidth < 640 // 640px -> sm
  let maxTextLength = 0

  if (as === 'title') {
    maxTextLength = isSmallerDevices ? 15 : 30
  } else {
    maxTextLength = isSmallerDevices ? 25 : 40
  }

  if (stringContent.length >= maxTextLength) {
    return (
      <motion.p
        animate={{ x: [0, stringContent.length * 5 * -1, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        className={`w-fit ${twStyle}`}
      >
        {children}
      </motion.p>
    )
  }

  return <p className={`w-fit ${twStyle}`}>{children}</p>
}

interface PlayingTrackProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['spotify']
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (res.status === 204) {
      return null
    }

    return res.json()
  })

export default function PlayingTrack({ dictionary }: PlayingTrackProps) {
  const { data, error } = useSWR<GetCurrentPlayingTrack | undefined>('api/spotify/get-current-playing-track', fetcher, {
    refreshInterval: 1000 * 10,
  }) // 10 seconds

  function listAsString(list: unknown[]): string {
    let stringfiedList = ''

    if (data) {
      list.forEach((item, i) => {
        if (i > 0) {
          stringfiedList += ', ' + item
        } else {
          stringfiedList += item
        }
      })
    }

    return stringfiedList
  }

  return (
    <>
      {!data || error ? (
        <div className="flex items-center gap-2">
          <SpotifyLogo size={12} />
          <div>
            <h5 className="text-sm font-semibold">{dictionary.offline.title}</h5>
            <a
              href="https://open.spotify.com/user/oedsmo9jvegj40d4l8pyhbe38?si=c12c041e15894cf5"
              className="text-xs text-muted-foreground hover:underline"
            >
              Guilherme Malta
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="flex h-fit w-fit items-center justify-center gap-1 text-xs font-medium">
            <SpotifyLogo size={4} />
            <p>{dictionary.online.title}</p>
          </div>
          <div className="flex gap-2">
            <a href={data.item.album.external_urls.spotify}>
              <Image
                src={data.item.album.images[0].url}
                height={data.item.album.images[0].height}
                width={data.item.album.images[0].width}
                alt={`${data.item.album.name} album cover`}
                className="w-14 rounded-sm"
              />
            </a>
            <div className="mask-img-low-l-high-r flex w-36 flex-col justify-center overflow-hidden text-nowrap pl-2 sm:w-60">
              <AnimateText stringContent={data.item.name} as="title">
                <span>
                  <a href={data.item.external_urls.spotify} className="hover:underline">
                    {data.item.name}
                  </a>
                </span>
              </AnimateText>
              <AnimateText
                stringContent={`${dictionary.online.artist} ${listAsString(data.item.artists)}`}
                as="caption"
              >
                {dictionary.online.artist}{' '}
                {data.item.artists.map((artist, i) => (
                  <span key={artist.id}>
                    <a href={artist.external_urls.spotify} className="hover:underline">
                      {i > 0 && ', '}
                      {artist.name}
                    </a>
                  </span>
                ))}
              </AnimateText>
              <AnimateText stringContent={`${dictionary.online.album} ${data.item.album.name}`} as="caption">
                {dictionary.online.album}{' '}
                <span>
                  <a href={data.item.album.external_urls.spotify} className="hover:underline">
                    {data.item.album.name}
                  </a>
                </span>
              </AnimateText>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
