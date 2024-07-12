import '@/globals.css'
import '@/lib/i18n'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
