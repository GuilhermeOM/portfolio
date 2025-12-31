import Container from '@/components/container'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'
import { Locale } from '@/lib/i18n/i18n-config'

export default async function HomeLayout(
  props: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: Locale }>
  }>
) {
  const params = await props.params

  const { children } = props

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
