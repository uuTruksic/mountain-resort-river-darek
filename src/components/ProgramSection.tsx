import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { programDny, type DenTyp } from '../data/program'
import { vylety } from '../data/vylety'

const vyletMap = new Map(vylety.map((v) => [v.id, v]))

export default function ProgramSection() {
  const [sezona, setSezona] = useState<'leto' | 'zima'>('leto')
  const dny = programDny.filter((d) => d.sezona === sezona)

  return (
    <section id="program" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">Nápady, ne povinnost</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          Co s každým dnem
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Nic z toho není povinné. Jsou to jen tipy, kdyby se hodily — klidně si ale dny naplánujte
          úplně po svém, vymyslete si vlastní výlety, nebo si jen tak odpočiňte u hotelu. Hlavně ať
          si to užijete tak, jak budete chtít vy.
        </p>
      </motion.div>

      {/* přepínač sezóny */}
      <div className="mb-10 flex justify-center gap-2">
        {(['leto', 'zima'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSezona(s)}
            className={
              'rounded-full border px-5 py-2 text-sm transition ' +
              (sezona === s
                ? 'border-gold-400 bg-gold-400 text-night-950'
                : 'border-white/15 text-slate-200 hover:border-white/40')
            }
          >
            {s === 'leto' ? '☀️ Léto' : '❄️ Zima'}
          </button>
        ))}
      </div>

      {/* karty dnů */}
      <div className="grid gap-6 md:grid-cols-2">
        {dny.map((d, i) => (
          <DenKarta key={d.id} den={d} index={i} />
        ))}
      </div>
    </section>
  )
}

function DenKarta({ den, index }: { den: DenTyp; index: number }) {
  const nahledy = den.aktivity
    .map((a) => vyletMap.get(a)?.foto)
    .filter(Boolean)
    .slice(0, 3) as string[]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08, ease: 'easeOut' }}
    >
      <Link
        to={`/program/${den.id}`}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold-400/40"
      >
        <div className="mb-2 flex items-center gap-3">
          <span className="text-2xl">{den.ikona}</span>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            {den.nazev}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">{den.popis}</p>

        <div className="mt-4 flex gap-2">
          {nahledy.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-14 w-20 rounded-lg object-cover transition duration-500 group-hover:brightness-110"
            />
          ))}
        </div>

        <span className="mt-auto pt-4 text-sm font-medium text-gold-400">Podívat se na den →</span>
      </Link>
    </motion.div>
  )
}
