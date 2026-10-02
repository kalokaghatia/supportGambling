import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import background from './assets/background.webp'
import Donate from './pages/Donate.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Fixed layer instead of background-attachment: fixed, which iOS Safari ignores */}
    <div
      className="fixed inset-0 -z-10 bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/45 sm:bg-black/55" />
    </div>
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 py-6 text-white sm:py-10">
      <Donate />
    </main>
  </StrictMode>,
)
