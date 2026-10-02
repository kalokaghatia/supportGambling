import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import background from './assets/background.webp'
import Donate from './pages/Donate.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main
      className="relative flex min-h-screen items-center justify-center bg-slate-900 bg-cover bg-center bg-fixed px-4 py-10 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative">
        <Donate />
      </div>
    </main>
  </StrictMode>,
)
