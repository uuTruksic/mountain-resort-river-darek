import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { vylety } from '../data/vylety'
import UvodniObalka from '../components/UvodniObalka'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const base = import.meta.env.BASE_URL
const foto = (id: string) => vylety.find((v) => v.id === id)?.foto

const rozcestnik = [
  {
    to: '/o-pobytu',
    titul: 'O pobytu',
    popis: 'Hotel, váš pokoj, vybavení a kde to celé je.',
    foto: `${base}images/hotel/hotel-14.webp`,
  },
  {
    to: '/vylety',
    titul: 'Výlety a tipy',
    popis: '25 míst v okolí — túry, lanovky, wellness i kultura.',
    foto: foto('bachledka-chodnik-korunami-stromov'),
  },
  {
    to: '/cesta',
    titul: 'Jak se tam dostat',
    popis: 'Trasa Třtice → Ždiar a zastávky po cestě.',
    foto: foto('splav-dunajca'),
  },
]

const tipy = vylety.filter((v) => v.doporuceno).slice(0, 3)

export default function HomePage() {
  return (
    <>
      <UvodniObalka />
      <main className="relative overflow-hidden">
      {/* Pozadí celé stránky */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-900 to-[#13233a]" />

      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={`${base}images/hero.webp`}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-night-950/55 via-night-950/35 to-night-950" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,17,32,0.5),transparent_72%)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
          className="absolute left-1/2 top-[-6rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,177,90,0.35),transparent_60%)] blur-3xl"
        />
        <Mountains />

        <div className="mx-auto flex max-w-4xl flex-col items-center [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 text-sm uppercase tracking-[0.35em] text-gold-400"
          >
            Dárek k 50. narozeninám
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-tight text-white sm:text-7xl"
          >
            Mountain Resort River
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            Pár klidných dní v srdci Belianských Tater, ve Ždiaru. Ubytování, cesta
            i tipy na výlety jsou nachystané — stačí si vybrat termín.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/o-pobytu"
              className="rounded-full bg-gold-400 px-7 py-3 font-medium text-night-950 transition hover:scale-105 hover:bg-[#e6c373]"
            >
              Prohlédnout pobyt
            </Link>
            <Link
              to="/vylety"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:border-white/50"
            >
              Výlety v okolí
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-400"
        >
          <span>Posuň dolů</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* Rozcestník */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {rozcestnik.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group relative h-60 overflow-hidden rounded-3xl border border-white/10"
            >
              {r.foto && (
                <img
                  src={r.foto}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {r.titul}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{r.popis}</p>
                <span className="mt-3 inline-block text-sm font-medium text-gold-400">
                  Otevřít →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Naše tipy */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-400">Tipy na výlety</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
            Pár míst, která stojí za zastávku
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {tipy.map((t) => (
            <Link
              key={t.id}
              to={`/vylet/${t.id}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-gold-400/40"
            >
              <div className="relative h-44 overflow-hidden">
                {t.foto && (
                  <img
                    src={t.foto}
                    alt={t.nazev}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute right-3 top-3 rounded-full bg-night-950/70 px-2 py-1 text-xs backdrop-blur-sm">
                  ❤️
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {t.nazev}
                </h3>
                {t.procStojiZaTo && (
                  <p className="mt-1 line-clamp-2 text-sm text-slate-300">{t.procStojiZaTo}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/vylety"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50"
          >
            Všechny výlety a tipy →
          </Link>
        </div>
      </section>
      </main>
    </>
  )
}

function Mountains() {
  return (
    <svg
      aria-hidden
      className="absolute bottom-0 left-0 -z-10 w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#13233a"
        d="M0,224L160,176L320,240L480,160L640,224L800,128L960,208L1120,144L1280,224L1440,176L1440,320L0,320Z"
      />
      <path
        fill="#0f172a"
        d="M0,288L240,224L480,288L720,224L960,288L1200,240L1440,288L1440,320L0,320Z"
      />
    </svg>
  )
}
