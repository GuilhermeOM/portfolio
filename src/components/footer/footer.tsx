import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

import Container from '../container'
import LanguageSelect from './language-select'
import PlayingTrack from './spotify/playing-track'

interface FooterProps {
  lang: Locale
}

export default async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang)

  return (
    <footer className="flex h-32 items-center">
      <Container>
        <section>
          <PlayingTrack dictionary={dictionary.spotify} />
        </section>
        <section className="absolute right-4 flex h-full items-center">
          <LanguageSelect />
        </section>
      </Container>
    </footer>
  )
}
