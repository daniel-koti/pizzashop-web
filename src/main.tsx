import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enableMWS } from './api/mocks'
import { App } from './app'

enableMWS().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
