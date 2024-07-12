import { Outlet } from 'react-router-dom'

import Container from '@/components/container'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className="py-28">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
