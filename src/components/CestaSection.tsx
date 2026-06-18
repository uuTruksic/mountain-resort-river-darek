import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ZASTAVKA_TYP,
  trasa,
  trasaMapaEmbed,
  trasaMapaOdkaz,
  trasaMapaOdkazPrima,
  zastavky,
  type Zastavka,
} from '../data/cesta'

export default function CestaSection() {
  return (
    <section id="cesta" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">Cesta tam</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          Jak se tam dostat
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Cesta do Ždiaru vede přes hezká místa Vysočiny, jižní Moravy i Slovenska. S pár
          zastávkami na protažení a kávu z ní bude příjemný den na cestě — a na konci čekají Tatry.
        </p>
      </motion.div>

      {/* Souhrn trasy */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <FaktKarta ikona="📏" popisek="Vzdálenost">
          ~{trasa.vzdalenostKm} km
        </FaktKarta>
        <FaktKarta ikona="🕒" popisek="Čas jízdy">
          {trasa.cas}
        </FaktKarta>
        <FaktKarta ikona="🛣️" popisek="Hraniční přechod">
          {trasa.hranice}
        </FaktKarta>
      </div>

      <p className="mb-4 leading-relaxed text-slate-300">{trasa.popis}</p>
      <p className="mb-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
        🎫 {trasa.znamky}
      </p>

      {/* Mapa trasy */}
      <div className="mb-4 overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="Mapa trasy Třtice → Ždiar"
          src={trasaMapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[24rem] w-full"
        />
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <a
          href={trasaMapaOdkaz}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950 transition hover:bg-[#e6c373]"
        >
          Trasa se zastávkami ↗
        </a>
        <a
          href={trasaMapaOdkazPrima}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50"
        >
          Přímá cesta do hotelu ↗
        </a>
      </div>

      {/* Časová osa zastávek */}
      <h3 className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-gold-400">
        Zastávky po cestě
      </h3>
      <ol className="relative space-y-6">
        <div className="absolute left-[15px] top-3 bottom-3 w-px bg-white/15" aria-hidden />
        {zastavky.map((z, i) => (
          <ZastavkaRadek key={z.id} zastavka={z} poradi={i + 1} />
        ))}
      </ol>
    </section>
  )
}

function ZastavkaRadek({ zastavka: z, poradi }: { zastavka: Zastavka; poradi: number }) {
  const typ = ZASTAVKA_TYP[z.typ]
  const navigate = useNavigate()
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative pl-12"
    >
      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-sm font-bold text-night-950">
        {poradi}
      </span>

      <div
        onClick={() => navigate(`/zastavka/${z.id}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            navigate(`/zastavka/${z.id}`)
          }
        }}
        role="link"
        tabIndex={0}
        className="group flex cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-gold-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      >
        {/* náhledová fotka */}
        <div className="relative w-28 shrink-0 overflow-hidden sm:w-44">
          {z.foto ? (
            <img
              src={z.foto}
              alt={z.nazev}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-800 to-night-900 text-3xl">
              <span className="opacity-60">{typ.ikona}</span>
            </div>
          )}
        </div>

        {/* obsah */}
        <div className="min-w-0 flex-1 p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
              {typ.ikona} {typ.label}
            </span>
            <span className="text-xs text-gold-400">{z.cas}</span>
          </div>

          <h4 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            {z.nazev} <span className="text-base font-normal text-slate-400">· {z.mesto}</span>
          </h4>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">{z.popis}</p>

          <div className="mt-3 text-xs font-medium text-gold-400">Detail →</div>
        </div>
      </div>
    </motion.li>
  )
}

function FaktKarta({
  ikona,
  popisek,
  children,
}: {
  ikona: string
  popisek: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
      <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
        {ikona} {popisek}
      </div>
      <div className="font-medium text-white">{children}</div>
    </div>
  )
}
