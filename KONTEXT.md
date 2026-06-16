# KONTEXT PROJEKTU — čti jako první 📌

> Tenhle soubor je „brief" pro Claude Code i pro mě. V novém chatu stačí říct:
> **„Přečti si KONTEXT.md"** a máš veškerý kontext bez vysvětlování od začátku.

---

## 1) O co jde (zadání)

Koupil jsem **tátovi a maceše dárek k 50. narozeninám**: dárkový pobyt v hotelu
**Mountain Resort River, Ždiar (Belianské Tatry, Slovensko)**.
Koupeno přes Slevomat, ale **platnost poukazu sjednána napřímo přes hotel — až do konce roku 2027**
(ne jen do konce 2026, jak by bylo přes Slevomat).

Chci k tomu vytvořit **krásné webové stránky** (hlavní výstup, začínáme jím) a později **brožurku k tisku**.
Budou tam veškeré informace k ubytování + **zajímavosti a výlety po cestě tam i na místě**.
Cíl: dát jim to „na stříbrném podnose" — vše připravené, ale **nezávazné** (když nebudou chtít, nemusí použít nic).

Slevomat odkaz (zdroj infa):
https://www.slevomat.cz/akce/2342442-pobyt-v-tatrach-polopenze-a-privatni-vstup-do-virivky

---

## 2) Hotel a co poukaz obsahuje

- **Hotel:** Mountain Resort River, Ždiar 451, Belianské Tatry, Slovensko
- **Poukaz:** ubytování 2–14 nocí (volitelně), **polopenze** formou bufetu (snídaně + večeře),
  **privátní 30min vstup do vířivky**, welcome drink, **parkování a Wi-Fi zdarma**
- **Pokoje:** Deluxe 38 m², apartmány 41 m², mezonet 62 m²
- **Kontakt hotelu:** info@mrz.sk · +421 911 109 202 · +421 917 864 096
- **Vzdálenost:** ~225 km / ~3,5 h autem od startu

## 3) Pro koho a jaký obsah

- **Příjemci:** táta + macecha, oslava 50. narozenin
- **Start cesty:** **Třtice u Nového Strašecí** (Středočeský kraj; pojede se přes Prahu dál na SK)
- **Styl výletů:** **mix všeho** — pohodové procházky a vyhlídky, aktivní túry i zajímavosti/kultura
- **Tón:** osobní, laskavý, prakticky použitelný (mobil, mapy/navigace, otevírací doby, orientační ceny)
- **Zatím neupřesněno:** počet nocí pobytu a roční období cesty (ovlivní množství tipů a zaměření – túry vs. zima/lázně)

---

## 4) Kde projekt žije (technické)

- **Lokální kód:** `C:\Users\Tigo\Documents\dev\mountain-resort-river-darek`
  - `web/` — webové stránky (hlavní výstup)
  - `podklady/` — rešerše (hotel, trasa, výlety, zajímavosti)
- **GitHub (soukromý):** https://github.com/uuTruksic/mountain-resort-river-darek (účet `uuTruksic`)
- **Historie Claude Code:** synchronizuje se na Google Drive **automaticky** přes junction
  `C:\Users\Tigo\.claude\projects` → `C:\Users\Tigo\Můj disk\ClaudeSync\projects`.
  Kvůli synchronizaci není potřeba dělat nic navíc.

### Práce na druhém zařízení (notebook)
- `git clone https://github.com/uuTruksic/mountain-resort-river-darek.git`
  do **`C:\Users\Tigo\Documents\dev\mountain-resort-river-darek`** (cesta musí být znak po znaku stejná
  kvůli `claude --resume`, aby nabídl tytéž chaty). Historie tam už bude přes Drive.
- Železná pravidla syncu: jen jeden stroj v jednu chvíli; před přechodem počkat na zelené fajfky Drive.

---

## 5) Plán / postup

1. **Rešerše → `podklady/`**: ověřené info o hotelu a okolí Ždiaru; trasa Třtice → Ždiar se zastávkami
   (zajímavosti + výlety) — s odkazy a polohami.
2. **Návrh webu**: vzhled + struktura (sekce: o pobytu · jak se tam dostat · zastávky po cestě ·
   výlety v okolí · praktické info), pak realizace ve `web/`.
3. **Brožurka** (PDF k tisku) ze stejného obsahu.

## 6) Stav (aktualizuj při práci)

- **2026-06-16** — Projekt založen (lokálně + GitHub), první commit pushnut.
  Identifikován hotel a obsah poukazu. Sync historie přes Drive ověřen.
  **Další krok:** rešerše trasy Třtice→Ždiar a výletů v okolí; čeká se na upřesnění počtu nocí a ročního období.
