import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Mřížka fotek s lightboxem (klik = přes celou obrazovku, šipky ‹ ›, Esc). */
export default function Galerie({ nazev, fotky }: { nazev: string; fotky: string[] }) {
  const [index, setIndex] = useState<number | null>(null)

  if (fotky.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {fotky.map((url, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <img
              src={url}
              alt={`${nazev} – fotka ${i + 1}`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.parentElement?.style.setProperty('display', 'none')
              }}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-night-950/0 transition group-hover:bg-night-950/20" />
          </button>
        ))}
      </div>

      <Lightbox
        nazev={nazev}
        fotky={fotky}
        index={index}
        onClose={() => setIndex(null)}
        onZmena={setIndex}
      />
    </>
  )
}

function Lightbox({
  nazev,
  fotky,
  index,
  onClose,
  onZmena,
}: {
  nazev: string
  fotky: string[]
  index: number | null
  onClose: () => void
  onZmena: (i: number) => void
}) {
  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onZmena((index + 1) % fotky.length)
      if (e.key === 'ArrowLeft') onZmena((index - 1 + fotky.length) % fotky.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, fotky.length, onClose, onZmena])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Zavřít"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
          >
            ✕
          </button>

          {fotky.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onZmena((index - 1 + fotky.length) % fotky.length)
                }}
                aria-label="Předchozí"
                className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-8"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onZmena((index + 1) % fotky.length)
                }}
                aria-label="Další"
                className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-8"
              >
                ›
              </button>
            </>
          )}

          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={fotky[index]}
            alt={`${nazev} – fotka ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
            {index + 1} / {fotky.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
