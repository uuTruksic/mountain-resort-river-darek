import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const KLIC = 'uvodObalkaHotovo'

// Úvodní animace: zapečetěná obálka se otevře, vyjede kartička a ta se pak
// velkolepě rozletí přes celou obrazovku a rozplyne přímo do hero sekce.
// Hraje jen jednou za session, jde přeskočit kliknutím, respektuje reduced-motion.
export default function UvodniObalka() {
  const omezPohyb = useReducedMotion()
  const [zobrazit, setZobrazit] = useState(false)
  const [faze, setFaze] = useState(0) // 0 zavřená · 1 otevřená + dopis · 2 rozlet

  useEffect(() => {
    if (omezPohyb) return
    if (sessionStorage.getItem(KLIC)) return
    setZobrazit(true)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [omezPohyb])

  const zavri = () => {
    sessionStorage.setItem(KLIC, '1')
    document.body.style.overflow = ''
    setZobrazit(false)
  }

  useEffect(() => {
    if (!zobrazit) return
    const t1 = setTimeout(() => setFaze(1), 1700)
    const t2 = setTimeout(() => setFaze(2), 3000)
    const t3 = setTimeout(zavri, 4500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [zobrazit])

  const otevreno = faze >= 1
  const rozlet = faze >= 2

  return (
    <AnimatePresence>
      {zobrazit && (
        <motion.div
          key="uvod"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          onClick={zavri}
          className="fixed inset-0 z-[70] flex cursor-pointer flex-col items-center justify-center overflow-hidden"
        >
          {/* tmavé plátno – při rozletu zmizí a odhalí hero */}
          <motion.div
            animate={{ opacity: rozlet ? 0 : 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-night-950"
          />
          {/* zlatá záře */}
          <motion.div
            animate={{ opacity: rozlet ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,177,90,0.16),transparent_62%)] blur-2xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: rozlet ? 0 : 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mb-12 text-sm uppercase tracking-[0.4em] text-gold-400"
          >
            Dárek k 50. narozeninám
          </motion.p>

          {/* obálka */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: '1200px' }}
            className="relative h-52 w-80"
          >
            {/* dopis (kartička) – vyjede a pak se rozletí přes obrazovku */}
            <motion.div
              animate={{
                y: otevreno ? -150 : 0,
                scale: rozlet ? 20 : 1,
                opacity: rozlet ? 0 : 1,
              }}
              transition={{
                y: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 1.2, ease: [0.5, 0, 0.75, 0] },
                opacity: { duration: 0.85, ease: 'easeIn' },
              }}
              className={
                'absolute inset-x-5 bottom-4 top-4 flex flex-col items-center justify-center rounded-md bg-[#f6efdf] px-6 text-center shadow-xl ' +
                (rozlet ? 'z-40' : 'z-10')
              }
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-night-900">
                Mountain Resort River
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#b6913f]">
                Tatry vás čekají
              </p>
            </motion.div>

            {/* přední strana obálky */}
            <motion.div
              animate={{ opacity: rozlet ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-20 rounded-lg border border-gold-400/50 bg-gradient-to-b from-[#16273f] to-[#0e1a2c] shadow-2xl"
            />

            {/* klopa */}
            <motion.div
              animate={{ rotateX: otevreno ? 180 : 0, opacity: rozlet ? 0 : 1 }}
              transition={{
                rotateX: { duration: 0.9, ease: [0.6, 0, 0.2, 1] },
                opacity: { duration: 0.5 },
              }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformOrigin: 'top',
                transformStyle: 'preserve-3d',
              }}
              className={
                'absolute left-0 right-0 top-0 flex h-[60%] items-start justify-center border-x border-t border-gold-400/50 bg-gradient-to-b from-[#1b2f4d] to-[#13223a] ' +
                (otevreno ? 'z-0' : 'z-30')
              }
            >
              {/* pečeť */}
              <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-night-950 shadow-md">
                <span className="text-lg">♥</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            animate={{ opacity: rozlet ? 0 : faze >= 1 ? 0.7 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative mt-14 text-[11px] uppercase tracking-widest text-slate-500"
          >
            Klikni kamkoli pro přeskočení
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
