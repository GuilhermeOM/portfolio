import dynamic from 'next/dynamic'

import Container from '../container'
import LanguageSelect from './language-select'

const CurrentListening = dynamic(() => import('./current-listening'), {
  ssr: false,
})

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
