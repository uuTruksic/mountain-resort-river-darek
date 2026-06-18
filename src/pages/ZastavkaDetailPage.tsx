import { Link, useNavigate, useParams } from 'react-router-dom'
import Galerie from '../components/Galerie'
import { ZASTAVKA_TYP, zastavky } from '../data/cesta'

export default function ZastavkaDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const z = zastavky.find((s) => s.id === id)

  const zpet = () => {
    const idx = (window.history.state?.idx as number | undefined) ?? 0
    if (idx > 0) navigate(-1)
    else navigate('/cesta')
  }

  if (!z) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-night-950 px-6 text-center">
        <p className="text-2xl text-white">Zastávka nenalezena.</p>
        <Link to="/cesta" className="rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950">
          ← Zpět na cestu
        </Link>
      </main>
    )
  }

  const typ = ZASTAVKA_TYP[z.typ]
  const fotky = [z.foto, ...(z.galerie ?? [])].filter(Boolean) as string[]
  const mapa = `https://www.google.com/maps?q=${z.gps[0]},${z.gps[1]}&z=13&output=embed`

  return (
    <main className="min-h-screen bg-night-950 pb-20">
      {/* Hero fotka */}
      <div className="relative h-[55vh] min-h-80 w-full overflow-hidden">
        {z.foto ? (
          <img src={z.foto} alt={z.nazev} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-800 to-night-900 text-8xl">
            <span className="opacity-60">{typ.ikona}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/30 to-night-950/40" />

        <button
          onClick={zpet}
          className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-night-950/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-night-950"
        >
          ← Zpět na cestu
        </button>

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl px-6 pb-8">
          <span className="mb-3 inline-block rounded-full bg-night-950/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {typ.ikona} {typ.label} · {z.cas}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-6xl">
            {z.nazev}
          </h1>
          <p className="mt-2 text-lg text-slate-300">{z.mesto}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 px-6 py-12">
        <p className="rounded-2xl border border-gold-400/20 bg-gold-400/5 px-6 py-4 text-lg text-gold-400/90">
          {z.proc}
        </p>

        <p className="text-lg leading-relaxed text-slate-300">{z.popisDlouhy ?? z.popis}</p>

        {/* Galerie */}
        {fotky.length > 0 && (
          <div>
            <h2 className="mb-4 text-sm uppercase tracking-widest text-slate-400">Fotky</h2>
            <Galerie nazev={z.nazev} fotky={fotky} />
          </div>
        )}

        {/* Mapa */}
        <div>
          <h2 className="mb-4 text-sm uppercase tracking-widest text-slate-400">Na mapě</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`Mapa – ${z.nazev}`}
              src={mapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[28rem] w-full"
            />
          </div>
        </div>

        {/* Odkaz + zpět */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {z.odkaz && (
            <a
              href={z.odkaz}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-medium text-night-950 transition hover:bg-[#e6c373]"
            >
              Více o místě ↗
            </a>
          )}
          <button
            onClick={zpet}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50"
          >
            ← Zpět na cestu
          </button>
        </div>
      </div>
    </main>
  )
}
