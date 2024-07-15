import Container from '@/components/container'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'
import { Locale } from '@/lib/i18n/i18n-config'

export default function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <div>
      <Header lang={params.lang} />
      <main className="pb-16 pt-28">
        <Container>{children}</Container>
      </main>
      <Footer lang={params.lang} />
    </div>
  )
}
