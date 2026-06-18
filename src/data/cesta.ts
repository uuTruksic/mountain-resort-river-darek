// Cesta Třtice → Ždiar: souhrn trasy + zastávky po cestě.
// Ověřeno rešerší (2026-06-16); km/čas/GPS jsou orientační.
import { zastavkyFoto } from './cesta-foto'

export type ZastavkaTyp = 'protazeni' | 'obed' | 'relax' | 'zajimavost'

export interface Zastavka {
  id: string
  nazev: string
  mesto: string
  typ: ZastavkaTyp
  /** orientačně kdy na trase */
  cas: string
  gps: [number, number]
  popis: string
  proc: string
  odkaz?: string
  foto?: string
  galerie?: string[]
  popisDlouhy?: string
}

export const ZASTAVKA_TYP: Record<ZastavkaTyp, { label: string; ikona: string }> = {
  protazeni: { label: 'Protažení', ikona: '🚶' },
  obed: { label: 'Oběd', ikona: '🍽️' },
  relax: { label: 'Relax', ikona: '💆' },
  zajimavost: { label: 'Zajímavost', ikona: '✨' },
}

export const trasa = {
  start: 'Třtice u Nového Strašecí',
  cil: 'Ždiar 451',
  vzdalenostKm: 565,
  cas: '~6 h 45 min',
  popis:
    'Třtice → Praha → dálnice D1 (Jihlava, Velké Meziříčí, Brno) → D2 → hraniční přechod Břeclav–Brodské → Bratislava → slovenská D1 (Trnava, Trenčín, Žilina, Ružomberok, Poprad) → silnice I/66 přes Spišskou Belou a Tatranskou Kotlinu → Ždiar.',
  hranice: 'Břeclav–Brodské (D2) — Schengen, bez stálé kontroly',
  znamky:
    'Potřeba dálniční známka ČR (elektronická, edalnice.cz) i SR (e-známka na SPZ, eznamka.sk). Závěrečný úsek Poprad → Ždiar po silnici I. třídy už zpoplatněný není. Ceny a rozsah ověřit před cestou.',
}

const zastavkyData: Zastavka[] = [
  {
    id: 'velke-mezirici',
    nazev: 'Velké Meziříčí',
    mesto: 'historické náměstí a zámek',
    typ: 'zajimavost',
    cas: '≈ 2 h od startu',
    gps: [49.3553, 16.0121],
    popis:
      'Malebné město na soutoku Oslavy a Balinky s renesančním náměstím, městskou památkovou zónou a zámkem nad městem. Dominantou je vysoká věž kostela sv. Mikuláše s výhledem.',
    proc: 'Leží přímo u D1 (exit 146) zhruba v polovině české části — rychlé protažení i hezké jádro.',
    odkaz: 'https://www.turistika.cz/mista/velke-mezirici/detail',
  },
  {
    id: 'slavkov-u-brna',
    nazev: 'Slavkov u Brna (Austerlitz)',
    mesto: 'barokní zámek a park',
    typ: 'obed',
    cas: '≈ 3 h od startu',
    gps: [49.153, 16.8765],
    popis:
      'Významný barokní zámek se zámeckým parkem, spojený s bitvou u Slavkova (Austerlitz) roku 1805. Dostatek parkování i restaurací na klidný oběd.',
    proc: 'Jen ~5 min od D1 (exit 211) — ideální oběd a procházka před přejezdem na D2 ke hranici.',
    odkaz: 'https://www.zamek-slavkov.cz/pro-navstevniky/kudy-k-nam/',
  },
  {
    id: 'zilina-marianske-namestie',
    nazev: 'Žilina — Mariánske námestie',
    mesto: 'historické centrum',
    typ: 'protazeni',
    cas: '≈ 4,5 h od startu',
    gps: [49.2235, 18.7394],
    popis:
      'Čtvercové náměstí s podloubími (laubně) a barokním mariánským sloupem z roku 1738. Kompaktní historické jádro s radniční zvonkohrou a dvěma věžemi katedrály.',
    proc: 'První přirozená zastávka po slovenské hranici — káva a protažení v hezkém starém městě hned u D1.',
    odkaz: 'https://cs.wikipedia.org/wiki/Mari%C3%A1nsk%C3%A9_n%C3%A1m%C4%9Bst%C3%AD_(%C5%BDilina)',
  },
  {
    id: 'vlkolinec-skanzen',
    nazev: 'Vlkolínec',
    mesto: 'dřevěný skanzen UNESCO',
    typ: 'zajimavost',
    cas: '≈ 5 h od startu',
    gps: [49.03948, 19.27839],
    popis:
      'Nejlépe zachovaná rezervace lidové architektury na Slovensku — 45 roubených domů zapsaných na seznamu UNESCO. Vstup do osady zdarma (za některé expozice se platí), parkoviště u vstupu.',
    proc: 'Unikátní zážitek na půlce cesty — krátká vycházka mezi roubenkami s výhledem (~15 min odbočka z D1).',
    odkaz: 'https://whc.unesco.org/en/list/622',
  },
  {
    id: 'liptovska-mara',
    nazev: 'Liptovská Mara',
    mesto: 'přehrada s výhledem na Tatry',
    typ: 'protazeni',
    cas: '≈ 5 h od startu',
    gps: [49.1089, 19.5192],
    popis:
      'Rozlehlá přehradní nádrž hned u dálnice D1 s klidným výhledem na okolní tatranské hřebeny. Stačí pár minut na protažení u vody, kávu a fotku, než vyrazíte dál.',
    proc: 'Rychlá scénická zastávka přímo na trase — pár minut od dálnice, žádné velké zdržení.',
    odkaz: 'https://sk.wikipedia.org/wiki/Liptovsk%C3%A1_Mara',
  },
  {
    id: 'spisska-sobota-zastavka',
    nazev: 'Spišská Sobota',
    mesto: 'historické náměstí (Poprad)',
    typ: 'zajimavost',
    cas: '≈ 1 h před cílem',
    gps: [49.065258, 20.314871],
    popis:
      'Městská památková rezervace s gotickými, renesančními a barokními měšťanskými domy kolem náměstí. V kostele sv. Juraje pozdně gotický oltář z dílny Mistra Pavla z Levoče.',
    proc: 'Klidná malebná zastávka těsně před cílem — závěrečné protažení a káva před příjezdem do Ždiaru.',
    odkaz: 'https://www.severovychod.sk/en/trip/historicke-centrum-v-spisskej-sobote/',
  },
]

// Připojí ke každé zastávce fotky a delší popis podle id.
export const zastavky: Zastavka[] = zastavkyData.map((z) => ({ ...z, ...zastavkyFoto[z.id] }))

// Odkaz na celou trasu v Google Mapách (turn-by-turn) i embed přehledové mapy
// Body trasy pro routing zadáváme jako GPS (jednoznačné a vždy se napojí na silnici).
const trasaWaypointy = zastavky.map((z) => `${z.gps[0]},${z.gps[1]}`).join('|')

export const trasaMapaOdkaz =
  'https://www.google.com/maps/dir/?api=1' +
  '&origin=' +
  encodeURIComponent(`${trasa.start}, Česko`) +
  '&destination=' +
  encodeURIComponent(`${trasa.cil}, Slovensko`) +
  '&waypoints=' +
  encodeURIComponent(trasaWaypointy) +
  '&travelmode=driving'

// Stejná cesta, ale napřímo — jen domov → hotel, bez zastávek
export const trasaMapaOdkazPrima =
  'https://www.google.com/maps/dir/?api=1' +
  '&origin=' +
  encodeURIComponent(`${trasa.start}, Česko`) +
  '&destination=' +
  encodeURIComponent(`${trasa.cil}, Slovensko`) +
  '&travelmode=driving'

export const trasaMapaEmbed =
  'https://maps.google.com/maps?saddr=' +
  encodeURIComponent(`${trasa.start}, Czechia`) +
  '&daddr=' +
  encodeURIComponent(`${trasa.cil}, Slovakia`) +
  '&output=embed'
