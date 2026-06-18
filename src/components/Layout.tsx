import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

// Po přechodu na jinou stránku scrollni nahoru (změna filtru v URL ne — jen pathname).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const navItems = [
  { to: '/', label: 'Domů' },
  { to: '/o-pobytu', label: 'O pobytu' },
  { to: '/vylety', label: 'Výlety' },
  { to: '/cesta', label: 'Cesta' },
]

export default function Layout() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link
            to="/"
            className="font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl"
          >
            Mountain Resort River
          </Link>
          <div className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  'rounded-full px-3 py-1.5 transition ' +
                  (isActive
                    ? 'bg-gold-400 text-night-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

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
