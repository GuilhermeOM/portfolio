import { ArrowUpRight } from 'lucide-react'

interface Image {
  src: string
  alt: string
}

interface JobExperienceProps {
  sideDescription: string
  title: string
  description?: string
  image?: Image
  link?: string
  stack?: string[]
}

export default function ContentDescription({
  sideDescription,
  title,
  description,
  image,
  link,
  stack,
}: JobExperienceProps) {
  function handleStack() {
    let stackListToString = ''

    if (stack) {
      stack.forEach((s, i) => {
        stackListToString += s + (i + 1 === stack.length ? '' : ' • ')
      })
    }

    return stackListToString
  }

  return (
    <div className="flex flex-col gap-1 text-sm sm:grid sm:grid-cols-2 sm:grid-rows-1">
      <div>
        <p>{sideDescription}</p>
      </div>
      <div className="flex flex-col gap-1">
        {image && <img src={image.src} alt={image.alt} width={150} height={150} className="w-14 rounded-md border" />}
        {link ? (
          <a
            href={link}
            className="flex cursor-pointer items-center gap-2 font-semibold leading-relaxed hover:underline"
          >
            {title}{' '}
            <span>
              <ArrowUpRight size={18} />
            </span>
          </a>
        ) : (
          <p className="font-semibold leading-relaxed">{title}</p>
        )}
        {description && <p className="dark:text-muted-foreground">{description}</p>}
        {stack && stack.length > 0 && <p className="font-light text-muted-foreground">{handleStack()}</p>}
      </div>
    </div>
  )
}
