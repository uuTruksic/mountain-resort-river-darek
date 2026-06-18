import { Link, useNavigate, useParams } from 'react-router-dom'
import { programDny } from '../data/program'
import { vylety } from '../data/vylety'
import type { Vylet } from '../data/types'

const vyletMap = new Map(vylety.map((v) => [v.id, v]))

const HOTEL = 'Mountain Resort River, Ždiar 451, Slovensko'

// Trasa z hotelu na dané místo v Google Mapách (autem / MHD)
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

// Trasa celého dne: hotel → všechna místa → zpět do hotelu
function trasaDne(aktivity: Vylet[], mode: 'driving' | 'transit') {
  const body = aktivity
    .map((v) => (v.gps ? `${v.gps[0]},${v.gps[1]}` : `${v.nazev}, Slovensko`))
    .join('|')
  return (
    'https://www.google.com/maps/dir/?api=1&origin=' +
    encodeURIComponent(HOTEL) +
    '&destination=' +
    encodeURIComponent(HOTEL) +
    '&waypoints=' +
    encodeURIComponent(body) +
    '&travelmode=' +
    mode
  )
}


export default function ProgramDenPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const den = programDny.find((d) => d.id === id)

  const zpet = () => {
    const idx = (window.history.state?.idx as number | undefined) ?? 0
    if (idx > 0) navigate(-1)
    else navigate('/program')
  }

  if (!den) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-night-950 px-6 text-center">
        <p className="text-2xl text-white">Den nenalezen.</p>
        <Link to="/program" className="rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950">
          ← Zpět na program
        </Link>
      </main>
    )
  }

  const aktivity = den.aktivity.map((a) => vyletMap.get(a)).filter(Boolean) as Vylet[]
  const hero = aktivity.find((v) => v.foto)?.foto

  return (
    <main className="min-h-screen bg-night-950 pb-20">
      {/* Hero */}
      <div className="relative h-[45vh] min-h-72 w-full overflow-hidden">
        {hero ? (
          <img src={hero} alt={den.nazev} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-sky-900 to-night-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/50" />

        <button
          onClick={zpet}
          className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-night-950/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-night-950"
        >
          ← Zpět na program
        </button>

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl px-6 pb-8">
          <span className="mb-3 inline-block rounded-full bg-night-950/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {den.sezona === 'leto' ? '☀️ Léto' : '❄️ Zima'} · nápad na den
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-6xl">
            {den.ikona} {den.nazev}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 px-6 py-12">
        <p className="text-lg leading-relaxed text-slate-300">{den.popisDlouhy}</p>

        {den.pozn && (
          <p className="rounded-2xl border border-gold-400/20 bg-gold-400/5 px-6 py-4 text-gold-400/90">
            💡 {den.pozn}
          </p>
        )}

        {/* Trasa celého dne */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-1 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            Trasa celého dne
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Autem vám Mapy ukážou okruh z hotelu přes místa dne a zpět. Dopravu na konkrétní místo
            (autem i MHD) najdete v detailu každého výletu níže.
          </p>
          <a
            href={trasaDne(aktivity, 'driving')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-night-950 transition hover:bg-[#e6c373]"
          >
            🚗 Celý den autem ↗
          </a>
        </div>

        <div>
          <h2 className="mb-5 text-sm uppercase tracking-widest text-slate-400">Co k tomu patří</h2>
          <div className="space-y-5">
            {aktivity.map((v) => (
              <div
                key={v.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:flex-row"
              >
                <div className="relative h-44 shrink-0 overflow-hidden sm:h-auto sm:w-56">
                  {v.foto ? (
                    <img src={v.foto} alt={v.nazev} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/10 text-4xl">
                      ✨
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {v.nazev}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{v.popis}</p>
                  {v.procStojiZaTo && (
                    <p className="mt-2 text-sm italic text-gold-400/90">{v.procStojiZaTo}</p>
                  )}
                  <div className="mt-3 text-xs text-slate-400">
                    {v.vzdalenostMin != null && <span>~{v.vzdalenostMin} min od hotelu</span>}
                    {v.cena && <span> · {v.cena}</span>}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <a
                      href={trasa(v, 'driving')}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-gold-400/15 px-3 py-1.5 font-medium text-gold-400 transition hover:bg-gold-400/25"
                    >
                      🚗 Autem{v.vzdalenostMin != null ? ` ~${v.vzdalenostMin} min` : ''} ↗
                    </a>
                    <Link
                      to={`/vylet/${v.id}`}
                      className="ml-auto font-medium text-gold-400 underline-offset-2 hover:underline"
                    >
                      Více o výletu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={zpet}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50"
          >
            ← Zpět na program
          </button>
        </div>
      </div>
    </main>
  )
}
