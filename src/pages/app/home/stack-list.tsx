import { Badge } from '@/components/ui/badge'

export default function StackList() {
  const stacklist = [
    {
      id: '0',
      name: 'ReactJS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: '1',
      name: 'NextJS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      id: '2',
      name: 'NodeJS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      id: '3',
      name: 'TailwindCSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      id: '4',
      name: 'C#',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    },
  ]

  return (
    <ul className="flex flex-wrap gap-2">
      {stacklist.map((stack) => (
        <li key={stack.id}>
          <Badge className="flex w-fit gap-2 rounded-full px-4 py-0.5">
            <p>{stack.name}</p>
            <img src={stack.logo} alt={`${stack.name} logo`} width={16} />
          </Badge>
        </li>
      ))}
    </ul>
  )
}
