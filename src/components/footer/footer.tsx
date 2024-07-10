import Container from '../container'
import CurrentListening from './current-listening'
import LanguageSelect from './language-select'

export default function Footer() {
  return (
    <footer className="flex h-20 items-center p-4">
      <Container>
        <section>
          <CurrentListening />
        </section>
        <section className="absolute right-0 flex h-full items-center">
          <LanguageSelect />
        </section>
      </Container>
    </footer>
  )
}
