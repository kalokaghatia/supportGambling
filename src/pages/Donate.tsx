import { useState } from 'react'

const PAYPAL_URL = 'https://paypal.me/kalokaghatia'

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default function Donate() {
  const [chips, setChips] = useState(() => randomBetween(333, 1200))

  return (
    <>
      <div className="mb-4 self-end rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-sm font-semibold shadow-lg backdrop-blur-md sm:fixed sm:top-4 sm:right-4 sm:z-10 sm:mb-0 sm:px-5 sm:py-2 sm:text-base">
        🪙 Chips in play: <span className="tabular-nums">{chips.toLocaleString('en-US')}</span>
      </div>

      <section className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/15 bg-black/55 px-5 py-8 text-center shadow-2xl backdrop-blur-sm sm:gap-10 sm:bg-black/50 sm:px-12 sm:py-12 sm:backdrop-blur-md">
        <span className="text-5xl sm:text-6xl" aria-hidden="true">
          🎰
        </span>

        <blockquote className="max-w-2xl space-y-4 sm:space-y-6">
          <p className="text-2xl leading-snug font-bold text-balance drop-shadow-lg sm:text-4xl">
            “They say 90% of gamblers quit right before the big win. I never quit — that's why I'm
            always one step away from success.”
          </p>
          <p className="text-base text-white/85 sm:text-lg">
            Every euro you donate is an investment in my dream. A dream with a negative expected
            return, sure, but a dream nonetheless.
          </p>
        </blockquote>

        <a
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setChips((n) => n + 1)}
          className="w-full rounded-full text-balance bg-[#0070ba] px-6 py-3.5 text-base font-semibold sm:w-auto sm:px-8 sm:py-4 sm:text-lg text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#005ea6] focus:ring-4 focus:ring-white/50 focus:outline-none"
        >
          Donate with PayPal and keep me playing
        </a>

        <p className="text-sm text-white/70">No refunds. Just like at the casino.</p>

        <footer className="max-w-xl border-t border-white/20 pt-5 text-xs leading-relaxed sm:pt-6 text-white/75">
          Gambling is prohibited for anyone under 18 and can lead to addiction. Italian National
          Gambling Helpline (Istituto Superiore di Sanità):{' '}
          <a href="tel:800558822" className="font-semibold text-white hover:underline">
            800 558 822
          </a>
          , free and anonymous.
        </footer>
      </section>
    </>
  )
}
