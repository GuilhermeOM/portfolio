import { Metadata } from 'next'
import Image from 'next/image'

import strength from '@/assets/strength-logo.webp'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

import AnimateHomeContainer from './animate-home-container'
import AnimateHomeContentList from './animate-home-content-list'
import ContentDescription from './content-description'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <AnimateHomeContainer>
      <section id="me" className="flex gap-4">
        <div>
          <Image
            priority
            src="https://github.com/GuilhermeOM.png"
            alt="github profile picture"
            width={150}
            height={150}
            className="w-20 rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Guilherme Malta</h3>
          <p className="text-sm dark:text-muted-foreground">{dictionary.page.home.profile.role}</p>
          <a
            href="https://github.com/GuilhermeOM"
            className="cursor-pointer text-sm font-light text-muted-foreground hover:underline"
          >
            GuilhermeOM
          </a>
        </div>
      </section>
      <section id="about" className="max-w-3xl">
        <div>
          <h4 className="text-lg font-semibold leading-10">{dictionary.page.home.about.title}</h4>
          <p className="text-sm dark:text-muted-foreground">{dictionary.page.home.about.description}</p>
        </div>
      </section>
      <section id="work-experience">
        <h4 className="text-lg font-semibold leading-10">{dictionary.page.home.workexperience.title}</h4>
        <AnimateHomeContentList defaultLength={3} minLength={3} source="workexperience">
          {dictionary.page.home.workexperience.content.map((item, index) => (
            <li key={index}>
              <ContentDescription
                sideDescription={item.moment}
                title={item.title}
                link={item.link}
                description={item.caption}
                stack={item.stack}
              />
            </li>
          ))}
        </AnimateHomeContentList>
      </section>
      <section id="side-projects">
        <h4 className="text-lg font-semibold leading-10">{dictionary.page.home.sideprojects.title}</h4>
        <ul className="flex flex-col gap-8">
          <li>
            <ContentDescription
              sideDescription={dictionary.page.home.sideprojects.content[0].moment}
              image={{
                src: strength,
                alt: 'strong man',
              }}
              title="Strength"
              description={dictionary.page.home.sideprojects.content[0].caption}
              stack={['Next', 'Tailwind', 'Shadcn', 'Framer Motion', '.NET']}
            />
          </li>
        </ul>
      </section>
      <section id="links">
        <h4 className="text-lg font-semibold leading-10">Links</h4>
        <ul className="flex flex-col gap-4">
          <li>
            <ContentDescription sideDescription="Github" title="@GuilhermeOM" link="https://github.com/GuilhermeOM" />
          </li>
          <li>
            <ContentDescription sideDescription="X" title="@Maltaun99" link="https://x.com/Maltaun99" />
          </li>
          <li>
            <ContentDescription
              sideDescription="Linkedin"
              title="Guilherme Malta"
              link="https://www.linkedin.com/in/guilherme-malta-251095205/"
            />
          </li>
        </ul>
      </section>
    </AnimateHomeContainer>
  )
}
