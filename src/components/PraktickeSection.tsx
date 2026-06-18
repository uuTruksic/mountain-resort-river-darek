import { motion } from 'framer-motion'

type Blok = { ikona: string; titul: string; body: string[] }

const bloky: Blok[] = [
  {
    ikona: '🎒',
    titul: 'Co sbalit',
    body: [
      'Pohodlné boty na chození (v zimě s pořádnou podrážkou kvůli náledí).',
      'Oblečení na vrstvy — i v létě je v horách chladno a počasí se rychle mění.',
      'Nepromokavou bundu nebo pláštěnku.',
      'Plavky — do hotelové vířivky i do termálů.',
      'V létě brýle, opalovací krém a čepici; v zimě čepici, rukavice a šálu.',
      'Doklady, kartu a trochu hotovosti v eurech, nabíječku.',
    ],
  },
  {
    ikona: '💶',
    titul: 'Peníze a platby',
    body: [
      'Na Slovensku se platí eurem (€).',
      'Kartou zaplatíte skoro všude, ale na menší koliby, parkoviště a vstupy se hodí i hotovost.',
      'Lanovky bývají levnější online předem (Gopass).',
    ],
  },
  {
    ikona: '🚗',
    titul: 'Auto a parkování',
    body: [
      'Potřebujete dálniční známku pro Česko i Slovensko (obě elektronické).',
      'U většiny atrakcí je placené parkoviště (pár eur).',
      'Podrobná trasa i zastávky po cestě jsou v sekci Cesta.',
    ],
  },
  {
    ikona: '🆘',
    titul: 'Důležitá čísla',
    body: [
      '112 — jednotné tísňové číslo (funguje i ze zahraničí).',
      '18 300 — Horská záchranná služba.',
      'Hotel: +421 911 109 202 · info@mrz.sk',
    ],
  },
  {
    ikona: '⛰️',
    titul: 'Hory a počasí',
    body: [
      'Počasí v Tatrách se mění rychle — sledujte předpověď a berte vrstvy.',
      'V létě chodí odpoledne bouřky, túry je lepší vyrazit dopoledne.',
      'V zimě je brzo tma a bývá náledí — vyrazte včas.',
      'Vysokohorské chodníky bývají přes zimu (zhruba 1. 11. – 15. 6.) uzavřené — držte se značení.',
    ],
  },
  {
    ikona: '📱',
    titul: 'Dobré vědět',
    body: [
      'Mobilní data fungují v EU jako doma, bez příplatku za roaming.',
      'Slovenština a čeština si navzájem rozumí. 🙂',
      'Otevírací doby a ceny se sezónně mění — u každého místa je odkaz na ověření.',
    ],
  },
]

export default function PraktickeSection() {
  return (
    <section id="prakticke" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">Než vyrazíte</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          Praktické info
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Pár drobností, co se hodí vědět před cestou i na místě — ať vás nic nezaskočí.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bloky.map((b, i) => (
          <motion.div
            key={b.titul}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl">{b.ikona}</span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {b.titul}
              </h3>
            </div>
            <ul className="space-y-2">
              {b.body.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
