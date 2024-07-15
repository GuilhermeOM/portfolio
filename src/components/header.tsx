import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

import Container from './container'
import { ThemeToggle } from './theme/theme-toggle'

interface HeaderProps {
  lang: Locale
}

export default async function Header({ lang }: HeaderProps) {
  const dictionary = await getDictionary(lang)

  return (
    <header className="fixed z-10 flex h-20 w-full items-center">
      <Container>
        <section className="absolute right-4 flex h-full items-center">
          <ThemeToggle dictionary={dictionary.theme} />
        </section>
      </Container>
    </header>
  )
}
