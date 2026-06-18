import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Domů' },
  { to: '/o-pobytu', label: 'O pobytu' },
  { to: '/vylety', label: 'Výlety' },
  { to: '/cesta', label: 'Cesta' },
]

// Po přechodu na jinou stránku scrollni nahoru (změna filtru v URL ne — jen pathname).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const pilulka = ({ isActive }: { isActive: boolean }) =>
  'rounded-full px-3 py-1.5 text-sm transition ' +
  (isActive
    ? 'bg-gold-400 text-night-950'
    : 'text-slate-300 hover:bg-white/10 hover:text-white')

export default function Layout() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link
            to="/"
            className="shrink-0 whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl"
          >
            Mountain Resort River
          </Link>
          {/* desktop odkazy */}
          <div className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={pilulka}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* mobilní menu (tlačítko + celoobrazovkový panel) */}
      <MobilniMenu />

      <Outlet />

      <footer className="border-t border-white/10 bg-night-950 px-6 py-10 text-center text-sm text-slate-400">
        <p className="font-[family-name:var(--font-display)] text-lg text-white">
          Mountain Resort River
        </p>
        <p className="mt-1">Dárkový pobyt · Ždiar, Belianske Tatry · k 50. narozeninám 🎁</p>
      </footer>
    </div>
  )
}

function MobilniMenu() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // zavři při změně stránky a uzamkni scroll, když je otevřeno
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="sm:hidden">
      {/* tlačítko – animovaná ikona */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        aria-expanded={open}
        className="fixed right-4 top-3 z-[80] flex h-10 w-10 items-center justify-center rounded-full text-white"
      >
        <span className="relative block h-5 w-6">
          <motion.span
            className="absolute left-0 h-0.5 w-6 rounded-full bg-current"
            style={{ top: 3 }}
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 h-0.5 w-6 rounded-full bg-current"
            style={{ top: 17 }}
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </span>
      </button>

      {/* celoobrazovkové menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-night-950/95 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,177,90,0.14),transparent_62%)] blur-2xl" />

            <nav className="relative flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      'font-[family-name:var(--font-display)] text-4xl font-semibold transition ' +
                      (isActive ? 'text-gold-400' : 'text-white/90 hover:text-white')
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-12 text-xs uppercase tracking-[0.3em] text-gold-400"
            >
              Dárek k 50. narozeninám
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
