import strength from '@/assets/strength-logo.webp'

import ContentDescription from './content-description'

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-8">
      <section id="me" className="flex gap-4">
        <div>
          <img src="https://github.com/GuilhermeOM.png" alt="github profile picture" className="w-20 rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Guilherme Malta</h3>
          <p className="text-sm dark:text-muted-foreground">Mid-level softaware developer</p>
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
          <h4 className="text-lg font-semibold leading-10">About</h4>
          <p className="text-sm dark:text-muted-foreground">
            I am a software developer who loves automation and web development, always looking for new technologies. My
            work style is to always provide the best software quality on the projects I work on, implementing the best
            practices and helping my teammates and the company to grow.
          </p>
        </div>
      </section>
      <section id="work-experience">
        <h4 className="text-lg font-semibold leading-10">Work experience</h4>
        <ul className="flex flex-col gap-8">
          <li>
            <ContentDescription
              sideDescription="2023 - present"
              title="Mid-level software developer - Santos Brasil"
              link="https://www.santosbrasil.com.br/v2021/"
              description="Acting in important operation projects."
              stack={['React', 'Next', 'Redux', 'Tailwind', 'Shadcn', 'Framer Motion', 'Node', '.NET']}
            />
          </li>
          <li>
            <ContentDescription
              sideDescription="2022 - 2023"
              title="Junior software developer - Santos Brasil"
              link="https://www.santosbrasil.com.br/v2021/"
              description="Collaborated closely with the operational gate team to develop the new gate system integrated with the new TOS (terminal operational system). Improved most features of the ship docking system."
              stack={['React', 'Redux', 'MaterialUI', 'EmotionCSS', 'Node', 'SignalR', '.NET']}
            />
          </li>
          <li>
            <ContentDescription
              sideDescription="2021 - 2022"
              title="Intern software developer - Santos Brasil"
              link="https://www.santosbrasil.com.br/v2021/"
              description="Developed a monitoring system that tracks most of company's RPAs. Worked together with my tutor and the operation team to develop the ship docking system, Berthwindow."
              stack={['React', 'Redux', 'MaterialUI', 'Node', '.NET']}
            />
          </li>
        </ul>
      </section>
      <section id="side-projects">
        <h4 className="text-lg font-semibold leading-10">Side projects</h4>
        <ul className="flex flex-col gap-8">
          <li>
            <ContentDescription
              sideDescription="2024 (Paused)"
              image={{
                src: strength,
                alt: 'strong man',
              }}
              title="Strength"
              description="Manages your strength based on your lifts. You can organize your training routine and check your improvements."
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
    </div>
  )
}
