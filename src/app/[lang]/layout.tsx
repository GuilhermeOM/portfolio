import Container from '@/components/container'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'
import { Locale } from '@/lib/i18n/i18n-config'

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = (await params) as { lang: Locale }

  return (
    <div>
      <Header lang={lang} />
      <main className="pb-16 pt-28">
        <Container>{children}</Container>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
