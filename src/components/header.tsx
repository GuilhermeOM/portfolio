import Container from './container'
import { ThemeToggle } from './theme/theme-toggle'

export default function Header() {
  return (
    <header className="fixed z-10 flex h-20 w-full items-center p-4">
      <Container>
        <section className="absolute right-0 flex h-full items-center">
          <ThemeToggle />
        </section>
      </Container>
    </header>
  )
}
