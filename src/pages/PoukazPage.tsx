// Dárkový poukaz — DL karta (210×99 mm) na šířku, oboustranná.
// Strana 1: poukaz (foto + detaily + QR). Strana 2: prostor na věnování.
// Tiskne se z URL /poukaz. PDF se generuje v DL formátu se 3mm spadávkou
// (stránka 216×105 mm) — viz CSS @page.
const base = import.meta.env.BASE_URL
const bgFoto = `${base}images/hero.webp` // lobby hotelu (stejná fotka jako hero na webu)
const QR =
  'https://api.qrserver.com/v1/create-qr-code/?size=440x440&margin=0&ecc=M&color=22-32-46&bgcolor=243-237-220&data=https%3A%2F%2Fuutruksic.github.io%2Fmountain-resort-river-darek%2F'

export default function PoukazPage() {
  return (
    <div className="pk">
      <style>{CSS}</style>

      {/* PŘEDNÍ STRANA */}
      <section className="pk-card">
        <img src={bgFoto} alt="" className="pk-bg" />
        <div className="pk-shade" />
        <div className="pk-shade-b" />
        <div className="pk-frame" />
        <div className="pk-in">
          <div className="pk-top">
            <span className="pk-eyebrow">Dárkový poukaz</span>
            <span className="pk-top-r">k 50. narozeninám</span>
          </div>

          <div className="pk-mid">
            <h1 className="pk-title">Mountain Resort River</h1>
            <p className="pk-sub">Pobyt na 5 dní / 4 noci pro 2 osoby · Ždiar, Belianské Tatry</p>
            <p className="pk-incl">Polopenze · privátní wellness · parkování v ceně</p>
          </div>

          <div className="pk-bot">
            <div className="pk-bot-l">
              <p className="pk-lbl">Číslo poukazu</p>
              <p className="pk-num">20122027</p>
              <p className="pk-plat">Platnost: 15. 6.–20. 12. 2026 · 10. 1.–20. 12. 2027</p>
            </div>
            <div className="pk-bot-r">
              <div className="pk-web">
                <p className="pk-web-t">Web jen pro vás</p>
                <p className="pk-web-u">
                  Připravený přímo pro vás — mnohem víc fotek, map a tipů k pobytu:
                  <br />
                  uutruksic.github.io/mountain-resort-river-darek
                </p>
              </div>
              <div className="pk-qr-box">
                <img src={QR} alt="QR kód na web" className="pk-qr" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZADNÍ STRANA — věnování */}
      <section className="pk-back">
        <div className="pk-back-frame" />
        <div className="pk-back-in">
          <p className="pk-back-h">Věnování</p>
          <div className="pk-lines">
            <span className="pk-line" />
            <span className="pk-line" />
            <span className="pk-line" />
            <span className="pk-line" />
            <span className="pk-line" />
          </div>
          <div className="pk-back-foot">
            <span>Mountain Resort River · Ždiar</span>
            <span>Dárek k 50. narozeninám</span>
          </div>
        </div>
      </section>
    </div>
  )
}

const CSS = `
@page { size: 216mm 105mm; margin: 0; }
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
html, body { margin: 0; background: #fff; }
.pk { font-family: Inter, system-ui, sans-serif; }

/* ===== PŘEDNÍ STRANA ===== */
.pk-card { position: relative; width: 216mm; height: 105mm; overflow: hidden; color: #fff; page-break-after: always; }
.pk-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.pk-shade { position: absolute; inset: 0; background: linear-gradient(115deg, rgba(9,14,26,.86) 0%, rgba(9,14,26,.55) 48%, rgba(9,14,26,.74) 100%); }
.pk-shade-b { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,12,22,.82) 0%, rgba(8,12,22,.32) 26%, rgba(8,12,22,0) 48%); }
.pk-frame { position: absolute; inset: 9mm; border: 0.8pt solid rgba(233,205,132,.55); }
.pk-in { position: absolute; inset: 9mm; padding: 6mm 9mm; display: flex; flex-direction: column; justify-content: space-between; text-shadow: 0 1px 4px rgba(0,0,0,.7); }

.pk-top { display: flex; justify-content: space-between; align-items: baseline; }
.pk-eyebrow { text-transform: uppercase; letter-spacing: .32em; font-size: 9pt; font-weight: 600; color: #e9cd84; }
.pk-top-r { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 11pt; color: #efe7d4; }

.pk-mid { }
.pk-title { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: 27pt; line-height: 1.04; margin: 0; color: #fff; }
.pk-sub { font-size: 10.5pt; color: #e7ddca; margin: 2.5mm 0 0; }
.pk-incl { font-size: 8.5pt; letter-spacing: .04em; color: #cbb98e; margin: 1.5mm 0 0; }

.pk-bot { display: flex; justify-content: space-between; align-items: flex-end; gap: 8mm; }
.pk-lbl { text-transform: uppercase; letter-spacing: .18em; font-size: 7.5pt; color: #cdb98a; margin: 0; }
.pk-num { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 21pt; letter-spacing: .1em; color: #e9cd84; margin: 0.5mm 0 1mm; }
.pk-plat { font-size: 8.5pt; font-weight: 500; color: #eef2f9; margin: 0; text-shadow: 0 1px 3px rgba(0,0,0,.9); }
.pk-bot-r { display: flex; align-items: center; gap: 3.5mm; text-align: right; }
.pk-web { max-width: 54mm; }
.pk-web-t { text-transform: uppercase; letter-spacing: .14em; font-size: 7.5pt; color: #e9cd84; margin: 0 0 1mm; }
.pk-web-u { font-size: 6.5pt; letter-spacing: .02em; color: rgba(255,255,255,.78); margin: 0; line-height: 1.4; text-shadow: 0 1px 2px rgba(0,0,0,.75); }
.pk-qr-box { background: #f3eddc; padding: 2.2mm; border-radius: 2.2mm; border: 0.8pt solid rgba(176,138,46,.75); box-shadow: 0 1mm 3mm rgba(0,0,0,.35); flex: 0 0 auto; }
.pk-qr { width: 15mm; height: 15mm; display: block; }

/* ===== ZADNÍ STRANA — věnování ===== */
.pk-back { position: relative; width: 216mm; height: 105mm; overflow: hidden; background: #fbf7ee; color: #2a3344; }
.pk-back-frame { position: absolute; inset: 9mm; border: 0.8pt solid rgba(176,138,46,.5); }
.pk-back-in { position: absolute; inset: 9mm; padding: 6mm 10mm; display: flex; flex-direction: column; }
.pk-back-h { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 17pt; color: #b08a2e; margin: 0 0 4mm; }
.pk-lines { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 9mm; padding: 0 1mm; }
.pk-line { display: block; height: 0; border-bottom: 0.5pt solid rgba(120,104,70,.35); }
.pk-back-foot { display: flex; justify-content: space-between; font-size: 7.5pt; letter-spacing: .04em; color: #a99a7a; }

@media screen {
  body { background: #5b626e; }
  .pk { max-width: 216mm; margin: 0 auto; padding: 8mm 0; }
  .pk-card, .pk-back { box-shadow: 0 2px 14px rgba(0,0,0,.35); margin-bottom: 6mm; }
}
`
