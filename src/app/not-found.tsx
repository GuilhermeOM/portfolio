import { headers } from 'next/headers'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

export default async function NotFound() {
  const headersList = headers()
  const acceptLanguage = headersList.get('Accept-Language') || ''
  const lang = acceptLanguage.split(',')[0] as Locale

  const dictionary = await getDictionary(lang)

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center">
      <h2 className="text-8xl font-black">404</h2>
      <p>{dictionary.page.notfound.description} :(</p>

      <div className="my-8 flex w-full max-w-48">
        <Link href="/" passHref legacyBehavior>
          <Button className="w-full">Home</Button>
        </Link>
      </div>
    </div>
  )
}
