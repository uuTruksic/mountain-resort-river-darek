import { motion } from 'framer-motion'
import Galerie from './Galerie'
import { hotel } from '../data/hotel'

const fotoUrl = (f: string) => `${import.meta.env.BASE_URL}images/hotel/${f}`

const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mountain Resort River, Ždiar 451, Slovensko',
)}&z=14&output=embed`

export default function OHoteluSection() {
  return (
    <section id="o-hotelu" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">O pobytu</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          {hotel.nazev}
        </h2>
        <p className="mt-3 text-sm uppercase tracking-widest text-slate-400">{hotel.mesto}</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{hotel.uvod}</p>
      </motion.div>

      {/* Galerie hotelu */}
      <div className="mb-16">
        <Galerie nazev={hotel.nazev} fotky={hotel.fotky.map(fotoUrl)} />
      </div>

      {/* Co pobyt obsahuje */}
      <div className="mb-16 rounded-3xl border border-gold-400/20 bg-gold-400/5 p-8">
        <h3 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
          Co je součástí dárkového poukazu
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {hotel.pobytObsahuje.map((p) => (
            <li key={p} className="flex items-start gap-3 text-slate-200">
              <span className="mt-0.5 text-gold-400">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-2 border-t border-gold-400/20 pt-5 text-sm text-slate-300">
          <p>
            <span className="font-medium text-gold-400">🗓️ Platnost poukazu:</span>{' '}
            {hotel.platnost}
          </p>
          <p>
            <span className="font-medium text-gold-400">📞 Rezervace:</span> pokoj si rezervujte
            přímo v hotelu telefonicky nebo e-mailem (kontakt níže).
          </p>
        </div>
      </div>

      {/* Váš pokoj */}
      <h3 className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-gold-400">Váš pokoj</h3>
      <div className="mb-6 rounded-3xl border border-gold-400/30 bg-gold-400/5 p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-night-950">
            ★ Máte rezervovaný
          </span>
          <h4 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            {hotel.pokoj.nazev}
          </h4>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gold-400">
            {hotel.pokoj.velikost}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gold-400">
            č. {hotel.pokoj.cislo}
          </span>
        </div>
        <p className="leading-relaxed text-slate-300">{hotel.pokoj.popis}</p>
      </div>
      <div className="mb-16">
        <Galerie nazev={hotel.pokoj.nazev} fotky={hotel.pokojFotky.map(fotoUrl)} />
      </div>

      {/* Kde to je + mapa */}
      <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center">
          <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            Kde to je
          </h3>
          <p className="leading-relaxed text-slate-300">{hotel.poloha}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Mapa – Mountain Resort River, Ždiar"
            src={mapaEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full md:h-full"
          />
        </div>
      </div>

      {/* Vybavení */}
      <h3 className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-gold-400">
        Vybavení hotelu
      </h3>
      <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {hotel.vybaveni.map((v) => (
          <div
            key={v.text}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            <span className="text-lg">{v.ikona}</span>
            <span>{v.text}</span>
          </div>
        ))}
      </div>

      {/* Zajímavosti */}
      <div className="mb-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
          ✨ Zajímavosti
        </h3>
        <ul className="space-y-3">
          {hotel.zajimavosti.map((z) => (
            <li key={z} className="flex items-start gap-3 text-slate-300">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
              <span>{z}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Kontakt */}
      <div className="text-center text-sm text-slate-400">
        <p className="mb-2 uppercase tracking-widest">Kontakt na hotel</p>
        <p className="text-slate-200">
          {hotel.kontakt.adresa} ·{' '}
          <a href={`mailto:${hotel.kontakt.email}`} className="text-gold-400 hover:underline">
            {hotel.kontakt.email}
          </a>{' '}
          ·{' '}
          {hotel.kontakt.telefony.map((t, i) => (
            <span key={t}>
              <a href={`tel:${t.replace(/\s/g, '')}`} className="text-gold-400 hover:underline">
                {t}
              </a>
              {i < hotel.kontakt.telefony.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
