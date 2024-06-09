import me from '@/assets/IMG_1522.jpg'

import Container from './components/container'
import Header from './components/header/header'
import { ThemeProvider } from './components/theme/theme-provider'

export default function App() {
  return (
    <ThemeProvider>
      <Header />

      <Container>
        <main className="pt-8">
          <section className="relative flex w-full flex-col items-center gap-8 sm:flex-row sm:justify-end">
            <div className="flex flex-col gap-2 delay-150">
              <div className="sm:text-right">
                <h1 className="text-8xl font-black transition-all lg:text-[160px] xl:text-[200px]">HELLO</h1>
                <p className="text-sm">
                  I am{' '}
                  <span>
                    <a className="cursor-pointer underline" href="#about">
                      Guilherme
                    </a>
                  </span>{' '}
                  and this is my <span className="font-black">PORTIFOLIO</span>
                </p>
              </div>
            </div>

            <div>
              <img src={me} alt="me" width={500} className="mb-2 w-80 sm:w-96" />
              <div>
                <h5 className="font-bold">Guilherme Oliveira Malta</h5>
                <p className="w-40 text-sm text-muted-foreground">Mid-level software developer</p>
              </div>
            </div>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  )
}
