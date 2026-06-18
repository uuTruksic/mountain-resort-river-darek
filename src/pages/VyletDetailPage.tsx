import { useEffect, type ReactNode } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { vylety } from '../data/vylety'
import Galerie from '../components/Galerie'
import {
  DELKA_LABEL,
  NAROCNOST_LABEL,
  SEZONA_LABEL,
  TYP_GRADIENT,
  TYP_IKONA,
  TYP_LABEL,
  type Vylet,
} from '../data/types'

export default function VyletDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const vylet = vylety.find((v) => v.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Zpět = krok zpět v historii (zachová aktivní filtry na přehledu).
  // Když se na detail přišlo přímým odkazem (žádná historie), jdeme na úvod.
  const zpet = () => {
    const idx = (window.history.state?.idx as number | undefined) ?? 0
    if (idx > 0) navigate(-1)
    else navigate('/vylety')
  }

  if (!vylet) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-night-950 px-6 text-center">
        <p className="text-2xl text-white">Výlet nenalezen.</p>
        <Link to="/vylety" className="rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950">
          ← Zpět na výlety
        </Link>
      </main>
    )
  }

  const fotky = [vylet.foto, ...(vylet.galerie ?? [])].filter(Boolean) as string[]

  return (
    <main className="min-h-screen bg-night-950 pb-20">
      {/* Hero fotka */}
      <div className="relative h-[55vh] min-h-80 w-full overflow-hidden">
        {vylet.foto ? (
          <img src={vylet.foto} alt={vylet.nazev} className="h-full w-full object-cover" />
        ) : (
          <div
            className={
              'flex h-full w-full items-center justify-center bg-gradient-to-br text-8xl ' +
              TYP_GRADIENT[vylet.typ]
            }
          >
            <span className="opacity-60">{TYP_IKONA[vylet.typ]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/30 to-night-950/40" />

        <button
          onClick={zpet}
          className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-night-950/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-night-950"
        >
          ← Zpět na výlety
        </button>

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl px-6 pb-8">
          <span className="mb-3 inline-block rounded-full bg-night-950/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {TYP_IKONA[vylet.typ]} {TYP_LABEL[vylet.typ]}
            {vylet.doporuceno && ' · ❤️ náš tip'}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-6xl">
            {vylet.nazev}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 px-6 py-12">
        {/* Štítky */}
        <div className="flex flex-wrap gap-2 text-sm">
          <Stitek>{NAROCNOST_LABEL[vylet.narocnost]}</Stitek>
          <Stitek>{DELKA_LABEL[vylet.delka]}</Stitek>
          {vylet.sezona.map((s) => (
            <Stitek key={s}>{SEZONA_LABEL[s]}</Stitek>
          ))}
        </div>

        {vylet.procStojiZaTo && (
          <p className="rounded-2xl border border-gold-400/20 bg-gold-400/5 px-6 py-4 text-lg text-gold-400/90">
            {vylet.procStojiZaTo}
          </p>
        )}

        <p className="text-lg leading-relaxed text-slate-300">{vylet.popis}</p>

        {/* Praktické info */}
        <div className="grid gap-4 sm:grid-cols-3">
          {vylet.vzdalenostMin != null && (
            <InfoKarta ikona="🚗" popisek="Vzdálenost">
              ~{vylet.vzdalenostMin} min autem od hotelu
            </InfoKarta>
          )}
          {vylet.cena && (
            <InfoKarta ikona="💶" popisek="Cena">
              {vylet.cena}
            </InfoKarta>
          )}
          {vylet.oteviraciDoby && (
            <InfoKarta ikona="🕒" popisek="Otevírací doby">
              {vylet.oteviraciDoby}
            </InfoKarta>
          )}
        </div>

        {/* Galerie */}
        {fotky.length > 0 && (
          <div>
            <h2 className="mb-4 text-sm uppercase tracking-widest text-slate-400">Fotky</h2>
            <Galerie nazev={vylet.nazev} fotky={fotky} />
          </div>
        )}

        {/* Doprava z hotelu */}
        <div>
          <h2 className="mb-4 text-sm uppercase tracking-widest text-slate-400">
            Jak se tam dostat z hotelu
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={trasa(vylet, 'driving')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-night-950 transition hover:bg-[#e6c373]"
            >
              🚗 Autem{vylet.vzdalenostMin != null ? ` ~${vylet.vzdalenostMin} min` : ''} ↗
            </a>
            <a
              href={trasa(vylet, 'transit')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/50"
            >
              🚌 MHD ↗
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div>
          <h2 className="mb-4 text-sm uppercase tracking-widest text-slate-400">Na mapě</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`Mapa – ${vylet.nazev}`}
              src={mapaSrc(vylet)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[28rem] w-full"
            />
          </div>
        </div>

        {/* Odkaz + zpět */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {vylet.odkaz && (
            <a
              href={vylet.odkaz}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950 transition hover:bg-[#e6c373]"
            >
              Oficiální stránka ↗
            </a>
          )}
          <button
            onClick={zpet}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50"
          >
            ← Zpět na výlety
          </button>
        </div>
      </div>
    </main>
  )
}

function mapaSrc(v: Vylet) {
  const q = v.gps ? `${v.gps[0]},${v.gps[1]}` : `${v.nazev}, Slovensko`
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=13&output=embed`
}

const HOTEL = 'Mountain Resort River, Ždiar 451, Slovensko'

// Trasa z hotelu na místo v Google Mapách (autem / MHD)
function trasa(v: Vylet, mode: 'driving' | 'transit') {
  const cil = v.gps ? `${v.gps[0]},${v.gps[1]}` : `${v.nazev}, Slovensko`
  return (
    'https://www.google.com/maps/dir/?api=1&origin=' +
    encodeURIComponent(HOTEL) +
    '&destination=' +
    encodeURIComponent(cil) +
    '&travelmode=' +
    mode
  )
}

function InfoKarta({
  ikona,
  popisek,
  children,
}: {
  ikona: string
  popisek: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
        {ikona} {popisek}
      </div>
      <div className="text-sm text-slate-200">{children}</div>
    </div>
  )
}

function Stitek({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">{children}</span>
}
