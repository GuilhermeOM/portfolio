import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={'...loading'}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}
