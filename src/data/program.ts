// Menu "typů dnů" — hotové nápady na den, zvlášť pro léto a zimu.
// Každý den skládá 2–3 aktivity z výletů (podle id v src/data/vylety.ts)
// a má vlastní detailní stránku (/program/:id). Nezávazné — jen inspirace.

export interface DenTyp {
  id: string
  nazev: string
  sezona: 'leto' | 'zima'
  ikona: string
  popis: string
  popisDlouhy: string
  aktivity: string[] // id výletů
  pozn?: string
}

export const programDny: DenTyp[] = [
  // === LÉTO ===
  {
    id: 'leto-hory',
    nazev: 'Den v horách',
    sezona: 'leto',
    ikona: '🥾',
    popis: 'Pořádná túra do tatranské přírody. Vyrazte dopoledne, vezměte dobré boty a svačinu.',
    popisDlouhy:
      'Den, kdy se vydáte do hor po vlastních. Ráno vyrazíte, nahoře si dáte svačinu s výhledem a vrátíte se příjemně unavení. Vyberte si jednu z túr podle toho, kolik máte sil a jaké je počasí — od kratší cesty k vodopádu po celodenní výšlap k plesu.',
    aktivity: ['monkova-dolina-siroke-sedlo', 'bielovodska-dolina', 'popradske-pleso', 'zelene-pleso', 'vodopad-skok'],
    pozn: 'Vyberte jednu túru podle nálady a počasí.',
  },
  {
    id: 'leto-lanovky',
    nazev: 'Lanovky a vyhlídky',
    sezona: 'leto',
    ikona: '🚠',
    popis: 'Velehorské výhledy bez velké námahy — nahoru vás vyvezou lanovky.',
    popisDlouhy:
      'Pohodový den ve výškách bez dřiny — lanovky vás vyvezou nad hranici lesa a vy si jen užíváte panorama. Dá se spojit do jednoho velkého dne (Skalnaté pleso, štít, sedlo), nebo si vybrat jen jednu vyhlídku a zbytek dne strávit v klidu.',
    aktivity: ['lanovka-skalnate-pleso', 'lanovka-lomnicky-stit', 'lomnicke-sedlo-vyhliadka'],
    pozn: 'Lístky na Lomnický štít je dobré rezervovat předem.',
  },
  {
    id: 'leto-plesa',
    nazev: 'Pohodový den u ples',
    sezona: 'leto',
    ikona: '🏞️',
    popis: 'Rovinaté procházky, klid u vody a kávu na promenádě — žádný spěch.',
    popisDlouhy:
      'Když chcete být venku, ale bez velké námahy. Rovinaté okruhy kolem ples, procházka k vodopádům s lanovkou a káva na tatranské promenádě. Ideální den na vydechnutí mezi náročnějšími výlety.',
    aktivity: ['strbske-pleso-okruh', 'jezerske-jazero', 'hrebienok-vodopady', 'promenada-stary-smokovec'],
  },
  {
    id: 'leto-stromy',
    nazev: 'Korunami stromů a jeskyně',
    sezona: 'leto',
    ikona: '🌲',
    popis: 'Procházka v korunách stromů na Bachledce a chladná jeskyně hned za rohem.',
    popisDlouhy:
      'Den pro radost i za horšího počasí. Chodník korunami stromů na Bachledce je hned za rohem a v Belianské jeskyni je příjemný chládek, ať je venku jakkoli. Obojí zvládnete v pohodě za půl dne a zbytek si necháte na odpočinek.',
    aktivity: ['bachledka-chodnik-korunami-stromov', 'belianska-jaskyna'],
    pozn: 'Příjemné i za teplého dne — v jeskyni je chladno.',
  },
  {
    id: 'leto-kultura',
    nazev: 'Kultura a hrady',
    sezona: 'leto',
    ikona: '🏛️',
    popis: 'Den mezi památkami a v historických městech, s obědem ve městě.',
    popisDlouhy:
      'Den mimo hory — mezi hrady, kostely a starobylými náměstími. Vyberte si jedno dvě místa, ať máte čas v klidu se projít a dát si oběd ve městě. Spišský hrad, Levoča i Kežmarok patří k tomu nejhezčímu na Spiši.',
    aktivity: ['spissky-hrad', 'levoca-unesco', 'kezmarok-dreveny-kostol'],
    pozn: 'Vyberte 1–2 místa, ať zbude čas i na oběd.',
  },
  {
    id: 'leto-wellness',
    nazev: 'Voda a odpočinek',
    sezona: 'leto',
    ikona: '♨️',
    popis: 'Den na vypnutí — termály a večer privátní vířivka přímo v hotelu.',
    popisDlouhy:
      'Den, kdy si nebudete nic nakládat. Termály s teplou vodou, sauny a večer privátní vířivka přímo v hotelu. Hodí se po náročnější túře nebo prostě jen tak, když máte chuť na klid.',
    aktivity: ['aquacity-poprad', 'splav-dunajca', 'cerveny-klastor'],
  },

  // === ZIMA ===
  {
    id: 'zima-lanovky',
    nazev: 'Sníh a vyhlídky',
    sezona: 'zima',
    ikona: '🚠',
    popis: 'Zasněžené Tatry shora — lanovky jezdí i v zimě a výhledy jsou velkolepé.',
    popisDlouhy:
      'Zimní Tatry z výšky — lanovky jezdí celý rok a zasněžené štíty shora stojí za to. Teple se oblečte, nahoře je mráz a vítr, ale ten výhled vám to vynahradí. Po návratu se zahřejete v hotelové vířivce.',
    aktivity: ['lanovka-skalnate-pleso', 'lanovka-lomnicky-stit'],
    pozn: 'Teple se oblečte, nahoře bývá mráz a vítr.',
  },
  {
    id: 'zima-led',
    nazev: 'Ledový dóm a jeskyně',
    sezona: 'zima',
    ikona: '❄️',
    popis: 'Ledové sochy na Hrebienku a krápníky v jeskyni — zimní zážitek úplně bez lyží.',
    popisDlouhy:
      'Zimní zážitek úplně bez lyží. Na Hrebienku stojí ledová katedrála z tun ledu a v Belianské jeskyni vás čekají krápníky a podzemní ticho. Obojí je v pohodě i pro klidnější tempo.',
    aktivity: ['tatransky-ladovy-dom-hrebienok', 'belianska-jaskyna'],
    pozn: 'Ledový dóm bývá v provozu zhruba listopad–duben.',
  },
  {
    id: 'zima-wellness',
    nazev: 'Wellness a termály',
    sezona: 'zima',
    ikona: '♨️',
    popis: 'Teplá voda venku ve sněhu, sauny a klid — ideální zimní odpočinek.',
    popisDlouhy:
      'Nejlepší, co jde v zimě udělat — sednout si do teplé vody venku ve sněhu. Termální areály mají bazény i sauny a večer je tu ještě privátní vířivka v hotelu. Den čistě pro vaše pohodlí.',
    aktivity: ['aquacity-poprad', 'termaly-vrbov'],
  },
  {
    id: 'zima-kultura',
    nazev: 'Kultura a hrady',
    sezona: 'zima',
    ikona: '🏛️',
    popis: 'Den mezi památkami a v historických městech, s obědem v teple.',
    popisDlouhy:
      'Den v teple mezi památkami. Když je venku sychravo, hrady, kostely a historická města jsou příjemná změna — a oběd v útulné restauraci k tomu patří. Jen mimo sezónu mrkněte na otevírací doby.',
    aktivity: ['spissky-hrad', 'levoca-unesco', 'kezmarok-dreveny-kostol'],
    pozn: 'Mimo sezónu raději ověřte otevírací doby.',
  },
  {
    id: 'zima-vlacek',
    nazev: 'Zimní pohoda a vláček',
    sezona: 'zima',
    ikona: '🚞',
    popis: 'Pohodová jízda Tatranskou železnicí a procházka u zasněženého plesa.',
    popisDlouhy:
      'Pomalý, pohodový den. Tatranskou železnicí se svezete mezi středisky s výhledem na zasněžené hory a u Štrbského plesa si dáte klidnou procházku. Nikam nespěcháte, jen koukáte z okna a užíváte si zimu.',
    aktivity: ['tatranska-elektricka-zeleznica', 'strbske-pleso-okruh', 'promenada-stary-smokovec'],
  },
  {
    id: 'zima-zdiar',
    nazev: 'Den ve Ždiaru',
    sezona: 'zima',
    ikona: '🏡',
    popis: 'Goralská vesnice, dobré jídlo a večer privátní vířivka přímo v hotelu.',
    popisDlouhy:
      'Den, kdy nemusíte nikam jezdit. Projdete si goralskou vesnici, zajdete na dobré jídlo a večer si dopřejete privátní vířivku. Někdy je nejlepší zůstat na místě a vychutnat si klid.',
    aktivity: ['zdiarsky-dom-goralske-muzeum', 'restauracia-goral-zdiar'],
  },
]
