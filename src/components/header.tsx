import { Locale } from '@/i18n-config'
import Container from './container'
import { ThemeToggle } from './theme/theme-toggle'
import { getDictionary } from '@/get-dictionary';

interface HeaderProps {
  lang: Locale
}

export default async function Header({ lang }: HeaderProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="fixed z-10 flex h-20 w-full items-center p-4">
      <Container>
        <section className="absolute right-0 flex h-full items-center">
          <ThemeToggle dictionary={dictionary["theme"]}/>
        </section>
      </Container>
    </header>
  )
}
