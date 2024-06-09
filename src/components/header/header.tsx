import { AlignRight } from 'lucide-react'

import Container from '../container'
import { ThemeToggle } from '../theme/theme-toggle'
import LanguageSelect from './language-select'

export default function Header() {
  return (
    <header className="fixed z-10 flex h-20 w-full items-center bg-background/50 p-4 backdrop-blur-sm">
      <Container>
        <section className="mx-auto hidden h-full w-fit items-center justify-center sm:flex">
          <ul className="flex gap-4 font-medium text-[hsl(var(--muted-foreground))] [&_a]:cursor-pointer">
            <li>
              <a className="hover:text-[hsl(var(--secondary-foreground))]">About</a>
            </li>
            <li>
              <a className="hover:text-[hsl(var(--secondary-foreground))]">Experience</a>
            </li>
            <li>
              <a className="hover:text-[hsl(var(--secondary-foreground))]">Work</a>
            </li>
            <li>
              <a className="hover:text-[hsl(var(--secondary-foreground))]">Contact</a>
            </li>
          </ul>
        </section>

        <section className="absolute right-0 flex h-full items-center ">
          <div className="hidden gap-2 sm:flex">
            <LanguageSelect />
            <ThemeToggle />
          </div>
          <div className="block sm:hidden">
            <AlignRight />
          </div>
        </section>
      </Container>
    </header>
  )
}
