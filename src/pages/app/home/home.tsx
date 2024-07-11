import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import strength from '@/assets/strength-logo.webp'

import ContentDescription from './content-description'

export default function Home() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [i18n.language])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          opacity: {
            delay: 0.5,
          },
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mx-auto flex flex-col gap-8"
      >
        <section id="me" className="flex gap-4">
          <div>
            <img src="https://github.com/GuilhermeOM.png" alt="github profile picture" className="w-20 rounded-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Guilherme Malta</h3>
            <p className="text-sm dark:text-muted-foreground">{t('profile.role')}</p>
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
            <h4 className="text-lg font-semibold leading-10">{t('about.title')}</h4>
            <p className="text-sm dark:text-muted-foreground">{t('about.description')}</p>
          </div>
        </section>
        <section id="work-experience">
          <h4 className="text-lg font-semibold leading-10">{t('workexperience.title')}</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <ContentDescription
                sideDescription={t('workexperience.content.0.moment')}
                title={`${t('workexperience.content.0.title')} - Santos Brasil`}
                link="https://www.santosbrasil.com.br/v2021/"
                description={t('workexperience.content.0.caption')}
                stack={['React', 'Next', 'Redux', 'Tailwind', 'Shadcn', 'Framer Motion', 'Node', '.NET']}
              />
            </li>
            <li>
              <ContentDescription
                sideDescription="2022 - 2023"
                title={`${t('workexperience.content.1.title')} - Santos Brasil`}
                link="https://www.santosbrasil.com.br/v2021/"
                description={t('workexperience.content.1.caption')}
                stack={['React', 'Redux', 'MaterialUI', 'EmotionCSS', 'Node', 'SignalR', '.NET']}
              />
            </li>
            <li>
              <ContentDescription
                sideDescription="2021 - 2022"
                title={`${t('workexperience.content.2.title')} - Santos Brasil`}
                link="https://www.santosbrasil.com.br/v2021/"
                description={t('workexperience.content.2.caption')}
                stack={['React', 'Redux', 'MaterialUI', 'Node', '.NET']}
              />
            </li>
          </ul>
        </section>
        <section id="side-projects">
          <h4 className="text-lg font-semibold leading-10">{t('sideprojects.title')}</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <ContentDescription
                sideDescription={t('sideprojects.content.0.moment')}
                image={{
                  src: strength,
                  alt: 'strong man',
                }}
                title="Strength"
                description={t('sideprojects.content.0.caption')}
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
              <ContentDescription sideDescription="Twitter" title="@Maltaun99" link="https://x.com/Maltaun99" />
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
      </motion.div>
    </AnimatePresence>
  )
}
