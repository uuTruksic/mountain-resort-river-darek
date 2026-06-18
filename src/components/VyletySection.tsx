import { useMemo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { vylety } from '../data/vylety'
import {
  NAROCNOST_LABEL,
  SEZONA_LABEL,
  TYP_GRADIENT,
  TYP_IKONA,
  TYP_LABEL,
  type Sezona,
  type Typ,
  type Vylet,
} from '../data/types'

type SezonaFilter = Sezona | 'vse'
type TypFilter = Typ | 'vse'

const SEZONA_VOLBY: { id: SezonaFilter; label: string }[] = [
  { id: 'vse', label: 'Vše' },
  { id: 'leto', label: SEZONA_LABEL.leto },
  { id: 'zima', label: SEZONA_LABEL.zima },
]

const TYP_VOLBY: { id: TypFilter; label: string }[] = [
  { id: 'vse', label: 'Vše' },
  ...(Object.keys(TYP_LABEL) as Typ[]).map((t) => ({ id: t, label: TYP_LABEL[t] })),
]

export default function VyletySection() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const sezona = normSezona(searchParams.get('sezona'))
  const typ = normTyp(searchParams.get('typ'))

  // Filtry žijí v URL (?sezona=…&typ=…), aby šly sdílet a po návratu z detailu
  // zůstaly aktivní. replace: true = neplníme historii každým klikem.
  const nastav = (zmena: { sezona?: SezonaFilter; typ?: TypFilter }) => {
    const s = zmena.sezona ?? sezona
    const t = zmena.typ ?? typ
    const p = new URLSearchParams()
    if (s !== 'vse') p.set('sezona', s)
    if (t !== 'vse') p.set('typ', t)
    setSearchParams(p, { replace: true })
  }

  const filtrovane = useMemo(
    () =>
      vylety.filter((v) => {
        const sezonaOk =
          sezona === 'vse' || v.sezona.includes(sezona) || v.sezona.includes('celorocne')
        const typOk = typ === 'vse' || v.typ === typ
        return sezonaOk && typOk
      }),
    [sezona, typ],
  )

  return (
    <section id="vylety" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">Co podniknout</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          Výlety a tipy v okolí
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Vyberte podle nálady a ročního období — od pohodových procházek po pořádné túry.
          Kliknutím se otevře detail s fotkami a mapou.
        </p>
      </motion.div>

      {/* Filtry */}
      <div className="mb-10 space-y-3">
        <FilterRadek
          popisek="Sezóna"
          volby={SEZONA_VOLBY}
          aktivni={sezona}
          onZmena={(id) => nastav({ sezona: id })}
        />
        <FilterRadek
          popisek="Typ"
          volby={TYP_VOLBY}
          aktivni={typ}
          onZmena={(id) => nastav({ typ: id })}
        />
      </div>

      {/* Karty */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtrovane.map((v) => (
          <VyletKarta key={v.id} vylet={v} onOtevri={() => navigate(`/vylet/${v.id}`)} />
        ))}
      </div>

      {filtrovane.length === 0 && (
        <p className="mt-10 text-center text-slate-400">
          Pro tuto kombinaci zatím nemáme tip — zkuste jiný filtr.
        </p>
      )}
    </section>
  )
}

function FilterRadek<T extends string>({
  popisek,
  volby,
  aktivni,
  onZmena,
}: {
  popisek: string
  volby: { id: T; label: string }[]
  aktivni: T
  onZmena: (id: T) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-16 shrink-0 text-sm text-slate-400">{popisek}:</span>
      {volby.map((volba) => {
        const je = volba.id === aktivni
        return (
          <button
            key={volba.id}
            onClick={() => onZmena(volba.id)}
            className={
              'rounded-full border px-4 py-1.5 text-sm transition ' +
              (je
                ? 'border-gold-400 bg-gold-400 text-night-950'
                : 'border-white/15 text-slate-200 hover:border-white/40')
            }
          >
            {volba.label}
          </button>
        )
      })}
    </div>
  )
}

function VyletKarta({ vylet, onOtevri }: { vylet: Vylet; onOtevri: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={onOtevri}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOtevri()
        }
      }}
      role="link"
      tabIndex={0}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-gold-400/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
    >
      <KartaFoto vylet={vylet} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
          {vylet.nazev}
        </h3>

        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          <Stitek>{NAROCNOST_LABEL[vylet.narocnost]}</Stitek>
          {vylet.sezona.map((s) => (
            <Stitek key={s}>{SEZONA_LABEL[s]}</Stitek>
          ))}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">{vylet.popis}</p>

        {vylet.procStojiZaTo && (
          <p className="mt-3 line-clamp-2 text-sm italic text-gold-400/90">{vylet.procStojiZaTo}</p>
        )}

        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-slate-400">
          <span>{vylet.vzdalenostMin != null ? `~${vylet.vzdalenostMin} min od hotelu` : ' '}</span>
          <span className="font-medium text-gold-400">Detail →</span>
        </div>
      </div>
    </motion.article>
  )
}

function KartaFoto({ vylet }: { vylet: Vylet }) {
  return (
    <div className="relative h-48 overflow-hidden">
      {vylet.foto ? (
        <img
          src={vylet.foto}
          alt={vylet.nazev}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className={
            'flex h-full w-full items-center justify-center bg-gradient-to-br text-5xl ' +
            TYP_GRADIENT[vylet.typ]
          }
        >
          <span className="opacity-60">{TYP_IKONA[vylet.typ]}</span>
        </div>
      )}

      {/* Štítek typu + doporučení přes fotku */}
      <span className="absolute left-3 top-3 rounded-full bg-night-950/70 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
        {TYP_IKONA[vylet.typ]} {TYP_LABEL[vylet.typ]}
      </span>
      {vylet.doporuceno && (
        <span
          title="Náš tip"
          className="absolute right-3 top-3 rounded-full bg-night-950/70 px-2 py-1 text-xs backdrop-blur-sm"
        >
          ❤️
        </span>
      )}
    </div>
  )
}

function Stitek({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-white/10 px-2.5 py-1 text-slate-200">{children}</span>
}

function normSezona(v: string | null): SezonaFilter {
  return v === 'leto' || v === 'zima' ? v : 'vse'
}

function normTyp(v: string | null): TypFilter {
  return v && v in TYP_LABEL ? (v as TypFilter) : 'vse'
}
