import { Outlet } from 'react-router-dom'

import Container from '@/components/container'
import Header from '@/components/header/header'

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="pt-28">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}
