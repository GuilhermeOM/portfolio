import me from '@/assets/IMG_1522.jpg'

import StackList from './stack-list'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="relative mb-10 flex w-full flex-col items-center gap-8 sm:flex-row sm:justify-end">
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
        <div className="mx-auto sm:mx-0">
          <img src={me} alt="me" width={500} className="mb-2 w-80 sm:w-96" />
          <div>
            <h5 className="font-bold">Guilherme Oliveira Malta</h5>
            <p className="w-40 text-sm text-muted-foreground">Mid-level software developer</p>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-3xl text-justify">
        <div className="mb-4">
          <h4 className="mb-2 text-3xl font-bold">About</h4>
          <p>
            I am a software developer who loves automation and web development, always looking for new technologies. My
            work style is to always provide the best software quality on the projects I work on, implementing the best
            practices and helping my teammates and the company to grow.
          </p>
        </div>

        <StackList />
      </section>
    </div>
  )
}
