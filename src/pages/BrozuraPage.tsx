import { hotel } from '../data/hotel'
import { vylety } from '../data/vylety'
import { programDny } from '../data/program'
import { trasa, zastavky, ZASTAVKA_TYP } from '../data/cesta'
import { NAROCNOST_LABEL } from '../data/types'

// Tisková brožura (A4, světlý layout). Tiskne se přes headless prohlížeč
// z URL /brozura. Čerpá ze stejných dat jako web.
const base = import.meta.env.BASE_URL
const hotelFoto = (f: string) => `${base}images/hotel/${f}`
const coverFoto = `${base}images/hero.webp` // lobby hotelu (stejná fotka jako na webu i na poukazu)

export default function BrozuraPage() {
  const leto = programDny.filter((d) => d.sezona === 'leto')
  const zima = programDny.filter((d) => d.sezona === 'zima')

  return (
    <div className="bz">
      <style>{CSS}</style>

      {/* OBÁLKA */}
      <section className="bz-cover">
        {coverFoto && <img src={coverFoto} alt="" className="bz-cover-img" />}
        <div className="bz-cover-shade" />
        <div className="bz-cover-in">
          <p className="bz-eyebrow bz-gold">Dárek k 50. narozeninám</p>
          <h1 className="bz-cover-title">Mountain Resort River</h1>
          <p className="bz-cover-sub">Dárkový pobyt v Belianských Tatrách</p>
          <p className="bz-cover-place">Ždiar · Slovensko</p>
        </div>
      </section>

      {/* O POBYTU */}
      <section className="bz-page">
        <h2 className="bz-h2">O pobytu</h2>
        <p className="bz-lead">{hotel.uvod}</p>

        <div className="bz-webbox">
          <img
            className="bz-webbox-qr"
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=0&data=https%3A%2F%2Fuutruksic.github.io%2Fmountain-resort-river-darek%2F"
            alt="QR kód na web"
          />
          <div>
            <p className="bz-webbox-t">Celý dárek je i online</p>
            <p className="bz-webbox-u">
              Fotky, mapy a trasy ke všem výletům — stačí načíst QR kód nebo zadat:
              <br />
              <strong>uutruksic.github.io/mountain-resort-river-darek</strong>
            </p>
          </div>
        </div>

        <div className="bz-photos2">
          <img src={hotelFoto('hotel-14.webp')} alt="" />
          <img src={hotelFoto('pokoj-1.jpg')} alt="" />
        </div>

        <div className="bz-cols">
          <div>
            <h3 className="bz-h3">Váš pokoj</h3>
            <p>
              <strong>{hotel.pokoj.nazev}</strong> ({hotel.pokoj.velikost}, č. {hotel.pokoj.cislo})
            </p>
            <p className="bz-small">{hotel.pokoj.popis}</p>
          </div>
          <div>
            <h3 className="bz-h3">Co je součástí poukazu</h3>
            <ul className="bz-list">
              {hotel.pobytObsahuje.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bz-note">
          <strong>Číslo dárkového poukazu:</strong>{' '}
          <span className="bz-voucher-num">20122027</span>
          <br />
          <strong>Platnost poukazu:</strong> {hotel.platnost}
          <br />
          <strong>Rezervace:</strong> přímo v hotelu — {hotel.kontakt.telefony.join(' · ')} ·{' '}
          {hotel.kontakt.email}
        </div>
      </section>

      {/* CESTA */}
      <section className="bz-page">
        <h2 className="bz-h2">Jak se tam dostat</h2>
        <div className="bz-facts">
          <span>
            <strong>~{trasa.vzdalenostKm} km</strong> · vzdálenost
          </span>
          <span>
            <strong>{trasa.cas}</strong> · čas jízdy
          </span>
          <span>
            <strong>{trasa.start}</strong> → <strong>Ždiar</strong>
          </span>
        </div>
        <p className="bz-small">{trasa.popis}</p>

        <h3 className="bz-h3">Zastávky po cestě</h3>
        <ol className="bz-stops">
          {zastavky.map((z, i) => (
            <li key={z.id}>
              <span className="bz-stop-n">{i + 1}</span>
              <span>
                <strong>{z.nazev}</strong> <span className="bz-muted">· {z.mesto}</span> —{' '}
                {ZASTAVKA_TYP[z.typ].label}, {z.cas}
                <br />
                <span className="bz-small">{z.popis}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* VÝLETY */}
      <section className="bz-page">
        <h2 className="bz-h2">Výlety a tipy v okolí</h2>
        <p className="bz-lead">
          {vylety.length} míst kolem Ždiaru — túry, lanovky, wellness i kultura. Vyberte si, na co
          máte náladu.
        </p>
        <div className="bz-grid">
          {vylety.map((v) => (
            <div className="bz-card" key={v.id}>
              {v.foto && <img src={v.foto} alt="" className="bz-card-img" />}
              <div className="bz-card-b">
                <h4 className="bz-card-t">{v.nazev}</h4>
                {v.procStojiZaTo && <p className="bz-card-w">{v.procStojiZaTo}</p>}
                <p className="bz-card-m">
                  {NAROCNOST_LABEL[v.narocnost]}
                  {v.vzdalenostMin != null ? ` · ~${v.vzdalenostMin} min autem` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      <section className="bz-page">
        <h2 className="bz-h2">Nápady na dny</h2>
        <p className="bz-lead">
          Nic povinného — jen pár nápadů, co s každým dnem. Klidně si dny naplánujte po svém.
        </p>
        <div className="bz-cols">
          <div>
            <h3 className="bz-h3">☀️ Léto</h3>
            {leto.map((d) => (
              <ProgramRadek key={d.id} d={d} />
            ))}
          </div>
          <div>
            <h3 className="bz-h3">❄️ Zima</h3>
            {zima.map((d) => (
              <ProgramRadek key={d.id} d={d} />
            ))}
          </div>
        </div>
      </section>

      {/* PRAKTICKÉ */}
      <section className="bz-page">
        <h2 className="bz-h2">Praktické info</h2>
        <div className="bz-grid3">
          <Info t="🎒 Co sbalit" b={['Pohodlné boty (v zimě s pořádnou podrážkou).', 'Oblečení na vrstvy — v horách bývá chladno.', 'Nepromokavou bundu, plavky do wellness.', 'Doklady, kartu a hotovost v eurech.']} />
          <Info t="💶 Peníze" b={['Platí se eurem (€).', 'Karty skoro všude, hotovost na menší podniky a parkoviště.', 'Lanovky levněji online (Gopass).']} />
          <Info t="🚗 Auto" b={['Dálniční známka ČR i SR (elektronické).', 'U atrakcí placená parkoviště.', 'Trasa a zastávky v sekci Cesta.']} />
          <Info t="🆘 Důležitá čísla" b={['112 — tísňové číslo.', '18 300 — Horská záchranná služba.', `Hotel: ${hotel.kontakt.telefony[0]}`]} />
          <Info t="⛰️ Hory a počasí" b={['Počasí se rychle mění — vrstvy a předpověď.', 'V létě odpolední bouřky — túry ráno.', 'V zimě náledí a brzy tma — vyrazit včas.']} />
          <Info t="📱 Dobré vědět" b={['Roaming v EU jako doma.', 'Čeština a slovenština si rozumí.', 'Otevírací doby se sezónně mění.']} />
        </div>

        <div className="bz-closing">
          <p className="bz-closing-1">Hlavně ať si to užijete po svém.</p>
          <div className="bz-qr">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=0&data=https%3A%2F%2Fuutruksic.github.io%2Fmountain-resort-river-darek%2F"
              alt="QR kód na web"
            />
            <div className="bz-qr-text">
              <p className="bz-closing-2">
                Vše online i s mapami, fotkami a trasami:
                <br />
                <strong>uutruksic.github.io/mountain-resort-river-darek</strong>
              </p>
              <p className="bz-closing-3">
                Číslo dárkového poukazu: <strong>20122027</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProgramRadek({ d }: { d: (typeof programDny)[number] }) {
  const mista = d.aktivity
    .map((a) => vylety.find((v) => v.id === a)?.nazev)
    .filter(Boolean)
    .join(', ')
  return (
    <div className="bz-prog">
      <strong>
        {d.ikona} {d.nazev}
      </strong>
      <p className="bz-small">{d.popis}</p>
      <p className="bz-prog-m">{mista}</p>
    </div>
  )
}

function Info({ t, b }: { t: string; b: string[] }) {
  return (
    <div className="bz-info">
      <h4 className="bz-info-t">{t}</h4>
      <ul className="bz-list">
        {b.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  )
}

const CSS = `
@page { size: A4; margin: 14mm; }
@page bz-cover-page { size: A4; margin: 0; }
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
html, body { background: #fff; }
.bz { background: #fff; color: #1f2a3a; font-family: Inter, system-ui, sans-serif; font-size: 10.5pt; line-height: 1.5; }
.bz img { display: block; }
.bz-gold { color: #b08a2e; }
.bz h1,.bz h2,.bz h3,.bz h4 { font-family: 'Cormorant Garamond', Georgia, serif; color: #16202e; margin: 0; }

.bz-eyebrow { text-transform: uppercase; letter-spacing: .3em; font-size: 9pt; margin: 0 0 8mm; }

/* obálka */
.bz-cover { position: relative; width: 210mm; height: 297mm; overflow: hidden; page-break-after: always; color: #fff; page: bz-cover-page; }
.bz-cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 14% center; }
.bz-cover-shade { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,17,32,.42) 0%, rgba(11,17,32,.1) 24%, rgba(11,17,32,.5) 50%, rgba(11,17,32,.88) 76%, rgba(11,17,32,.99) 100%); }
.bz-cover-in { position: absolute; left: 0; right: 0; bottom: 22mm; text-align: center; padding: 0 16mm; text-shadow: 0 1px 3px rgba(0,0,0,.85), 0 3px 16px rgba(0,0,0,.7); }
.bz-cover .bz-cover-title { font-size: 40pt; font-weight: 700; line-height: 1.05; margin: 4mm 0 0; color: #ffffff; }
.bz-cover .bz-eyebrow { color: #e9cd84; }
.bz-cover-sub { font-size: 14pt; margin: 6mm 0 0; color:#f3eddc; }
.bz-cover-place { font-size: 10pt; letter-spacing: .25em; text-transform: uppercase; margin: 3mm 0 0; color:#e9cd84; }

/* stránka */
.bz-page { padding: 0; page-break-after: always; }
.bz-page:last-child { page-break-after: auto; }
.bz-h2 { font-size: 26pt; font-weight: 600; border-bottom: 1.5pt solid #d8b15a; padding-bottom: 4mm; margin-bottom: 7mm; }
.bz-h3 { font-size: 15pt; font-weight: 600; margin: 6mm 0 3mm; color:#b08a2e; }
.bz-lead { font-size: 11.5pt; color: #3a4658; margin: 0 0 6mm; }
.bz-small { font-size: 9pt; color: #55617a; }
.bz-muted { color: #8a93a6; }
.bz-list { margin: 0; padding-left: 4.5mm; }
.bz-list li { margin-bottom: 1.5mm; }
.bz-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; }
.bz-photos2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin: 0 0 6mm; }
.bz-photos2 img { width: 100%; height: 48mm; object-fit: cover; border-radius: 2mm; }
.bz-note { margin-top: 7mm; padding: 4mm 5mm; background: #faf6ec; border-left: 2pt solid #d8b15a; border-radius: 1mm; font-size: 9.5pt; line-height: 1.7; }
.bz-voucher-num { font-weight: 700; letter-spacing: .12em; color: #b08a2e; font-size: 11pt; }
.bz-webbox { display: flex; align-items: center; gap: 6mm; margin: 0 0 7mm; padding: 5mm; background: #faf6ec; border: 1pt solid #ecd9a8; border-radius: 2mm; break-inside: avoid; }
.bz-webbox-qr { width: 24mm; height: 24mm; flex: 0 0 auto; }
.bz-webbox-t { font-family: 'Cormorant Garamond', serif; font-size: 14pt; font-weight: 600; color: #16202e; margin: 0 0 1.5mm; }
.bz-webbox-u { font-size: 9.5pt; color: #55617a; margin: 0; }

/* fakta cesty */
.bz-facts { display: flex; flex-wrap: wrap; gap: 6mm; margin-bottom: 5mm; }
.bz-facts span { background:#faf6ec; padding: 3mm 5mm; border-radius: 2mm; font-size: 9.5pt; }
.bz-stops { list-style: none; margin: 3mm 0 0; padding: 0; }
.bz-stops li { display: flex; gap: 4mm; margin-bottom: 4mm; break-inside: avoid; }
.bz-stop-n { flex: 0 0 7mm; height: 7mm; border-radius: 50%; background:#d8b15a; color:#1f2a3a; font-weight:700; display:flex; align-items:center; justify-content:center; font-size:9pt; }

/* výlety */
.bz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }
.bz-card { border: .5pt solid #e3e7ee; border-radius: 2mm; overflow: hidden; break-inside: avoid; }
.bz-card-img { width: 100%; height: 34mm; object-fit: cover; }
.bz-card-b { padding: 3mm 4mm 4mm; }
.bz-card-t { font-size: 13pt; font-weight: 600; }
.bz-card-w { font-size: 9pt; color: #3a4658; font-style: italic; margin: 1.5mm 0; }
.bz-card-m { font-size: 8.5pt; color: #8a93a6; margin: 0; }

/* program */
.bz-prog { margin-bottom: 4mm; break-inside: avoid; }
.bz-prog-m { font-size: 8.5pt; color:#b08a2e; margin: 1mm 0 0; }

/* praktické */
.bz-grid3 { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm; }
.bz-info { break-inside: avoid; }
.bz-info-t { font-size: 12.5pt; margin-bottom: 2mm; }
.bz-closing { margin-top: 10mm; text-align: center; border-top: 1pt solid #e3e7ee; padding-top: 8mm; }
.bz-closing-1 { font-family: 'Cormorant Garamond', serif; font-size: 17pt; color:#16202e; }
.bz-closing-2 { font-size: 10pt; color:#55617a; margin: 0; }
.bz-closing-3 { font-size: 10pt; color:#16202e; margin: 3mm 0 0; }
.bz-qr { display: flex; align-items: center; justify-content: center; gap: 7mm; margin-top: 7mm; }
.bz-qr img { width: 28mm; height: 28mm; flex: 0 0 auto; }
.bz-qr-text { text-align: left; }

@media screen {
  body { background: #5b626e; }
  .bz { max-width: 210mm; margin: 0 auto; }
  .bz-cover, .bz-page { box-shadow: 0 2px 14px rgba(0,0,0,.3); margin-bottom: 6mm; background:#fff; }
  .bz-page { padding: 14mm; }
}
`
