import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import Container from '@/components/container'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'

export default function AppLayout() {
  return (
    <div>
      <Header />

      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="py-28"
      >
        <Container>
          <Outlet />
        </Container>
      </motion.main>

      <Footer />
    </div>
  )
}
