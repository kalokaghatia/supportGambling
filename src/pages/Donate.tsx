import { useState } from 'react'

const PAYPAL_URL = 'https://paypal.me/kalokaghatia'

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default function Donate() {
  const [chips, setChips] = useState(() => randomBetween(333, 1200))

  return (
    <>
      <div className="fixed top-4 right-4 z-10 rounded-full border border-white/20 bg-black/60 px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-md sm:text-base">
        🪙 Chips in play: <span className="tabular-nums">{chips.toLocaleString('en-US')}</span>
      </div>

      <section className="flex max-w-3xl flex-col items-center gap-10 rounded-3xl border border-white/15 bg-black/50 px-6 py-12 text-center shadow-2xl backdrop-blur-md sm:px-12">
        <span className="text-6xl" aria-hidden="true">
          🎰
        </span>

        <blockquote className="max-w-2xl space-y-6">
          <p className="text-3xl leading-snug font-bold drop-shadow-lg sm:text-4xl">
            “They say 90% of gamblers quit right before the big win. I never quit — that's why I'm
            always one step away from success.”
          </p>
          <p className="text-lg text-white/85">
            Every euro you donate is an investment in my dream. A dream with a negative expected
            return, sure, but a dream nonetheless.
          </p>
        </blockquote>

        <a
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setChips((n) => n + 1)}
          className="rounded-full bg-[#0070ba] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#005ea6] focus:ring-4 focus:ring-white/50 focus:outline-none"
        >
          Donate with PayPal and keep me playing
        </a>

        <p className="text-sm text-white/70">No refunds. Just like at the casino.</p>

        <footer className="max-w-xl border-t border-white/20 pt-6 text-xs text-white/75">
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
