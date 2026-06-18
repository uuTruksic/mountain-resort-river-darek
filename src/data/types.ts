// Datový model pro výlety a tipy. Jeden záznam = jedna karta na webu
// (a později jeden blok v tiskové brožurce). Vše se filtruje podle tagů níže.

export type Typ =
  | 'tura'
  | 'vyhlidka'
  | 'kultura'
  | 'wellness'
  | 'jidlo'
  | 'zajimavost'
  | 'aktivita'

export type Narocnost = 'relaxacni' | 'lehka' | 'stredni' | 'narocna'
export type Delka = 'kratka' | 'puldenni' | 'celodenni'
export type Sezona = 'leto' | 'zima' | 'celorocne'
export type Kde = 'poCeste' | 'okoli'

export interface Vylet {
  id: string
  nazev: string
  typ: Typ
  narocnost: Narocnost
  delka: Delka
  sezona: Sezona[]
  kde: Kde
  /** minuty autem od hotelu */
  vzdalenostMin?: number
  /** [lat, lng] pro mapu */
  gps?: [number, number]
  cena?: string
  oteviraciDoby?: string
  popis: string
  procStojiZaTo?: string
  odkaz?: string
  /** přímý URL hlavní fotky, zobrazí se na kartě */
  foto?: string
  /** další fotky do galerie v detailu */
  galerie?: string[]
  /** autor fotky pro kredit (např. „Jan Novák / Wikimedia Commons“) */
  fotoAutor?: string
  /** licence fotky (např. „CC BY-SA 4.0“) */
  fotoLicence?: string
  /** naše top doporučení – dostane „srdíčko“ */
  doporuceno?: boolean
  /** true = fakta ověřená rešerší; false/undefined = ještě ověřit */
  overeno?: boolean
}

// --- Popisky a ikony pro zobrazení -----------------------------------------

export const TYP_LABEL: Record<Typ, string> = {
  tura: 'Túra',
  vyhlidka: 'Vyhlídka / procházka',
  kultura: 'Kultura / památka',
  wellness: 'Wellness / relax',
  jidlo: 'Jídlo & lokály',
  zajimavost: 'Zajímavost',
  aktivita: 'Aktivita',
}

export const NAROCNOST_LABEL: Record<Narocnost, string> = {
  relaxacni: '🟢 Relaxační',
  lehka: '🔵 Lehká',
  stredni: '🟠 Střední',
  narocna: '🔴 Náročná',
}

export const DELKA_LABEL: Record<Delka, string> = {
  kratka: 'Krátká (do 1 h)',
  puldenni: 'Půldenní',
  celodenni: 'Celodenní',
}

export const SEZONA_LABEL: Record<Sezona, string> = {
  leto: '☀️ Léto',
  zima: '❄️ Zima',
  celorocne: 'Celoročně',
}

// Ikona + barevný gradient jako záloha, když u tipu chybí fotka
export const TYP_IKONA: Record<Typ, string> = {
  tura: '🥾',
  vyhlidka: '🏔️',
  kultura: '🏛️',
  wellness: '♨️',
  jidlo: '🍽️',
  zajimavost: '✨',
  aktivita: '🚠',
}

export const TYP_GRADIENT: Record<Typ, string> = {
  tura: 'from-emerald-800 to-night-900',
  vyhlidka: 'from-sky-800 to-night-900',
  kultura: 'from-amber-800 to-night-900',
  wellness: 'from-teal-700 to-night-900',
  jidlo: 'from-rose-800 to-night-900',
  zajimavost: 'from-indigo-800 to-night-900',
  aktivita: 'from-cyan-800 to-night-900',
}
