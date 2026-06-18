// Představení hotelu Mountain Resort River, Ždiar.
// Zdroj: Slevomat + KONTEXT.md. Pozn.: platnost poukazu je s hotelem
// sjednaná do konce 2027 (ne do 22. 12. 2026 jako přes Slevomat).

export const hotel = {
  nazev: 'Mountain Resort River',
  mesto: 'Ždiar · Belianske Tatry · Slovensko',

  uvod:
    'Moderní horský penzion v srdci Belianských Tater, ve vesnici Ždiar. Spojuje tradiční dřevěnou architekturu s elegantním interiérem a útulnou atmosférou — pěkné a klidné místo na pár dní v horách, kousek od slovensko-polské hranice.',

  poloha:
    'Leží přímo ve Ždiaru, v chráněné krajinné oblasti Belianských Tater. Lyžařské svahy jsou do 500 m, Chodník korunami stromů Bachledka ~4 km, Belianská jaskyňa ~7 km a celé Vysoké Tatry máte na dosah.',

  // celkové fotky hotelu (exteriér, lobby, restaurace, bufet, bar, wellness…)
  fotky: [
    'hotel-14.webp',
    'hotel-20.webp',
    'hotel-5.webp',
    'hotel-3.webp',
    'hotel-13.webp',
    'hotel-19.webp',
    'hotel-2.webp',
    'hotel-12.webp',
  ],

  // pokoj, který mají rodiče rezervovaný
  pokoj: {
    nazev: 'Pokoj Deluxe s výhledem na Tatry',
    cislo: '301',
    velikost: '38 m²',
    popis:
      'Útulný podkrovní pokoj (38 m²) s výhledem na Havran a Ždiarsku vidlu — nejvyšší vrcholy Belianských Tater. Queen size postel s rozkládacím gaučem, velký LCD televizor, Wi-Fi, čajový set a rychlovarná konvice, vlastní koupelna se sprchovým koutem, antialergické vybavení.',
  },
  // ověřené fotky konkrétně pokoje Deluxe 301 (z webu hotelu mrz.sk)
  pokojFotky: [
    'pokoj-1.jpg',
    'pokoj-2.jpg',
    'pokoj-3.jpg',
    'pokoj-4.jpg',
    'pokoj-5.jpg',
    'pokoj-6.jpg',
  ],

  vybaveni: [
    { ikona: '🍽️', text: 'Vlastní restaurace se slovenskou kuchyní' },
    { ikona: '💆', text: 'Privátní wellness / vířivka (1 h)' },
    { ikona: '🍷', text: 'Bar — vína, piva i káva' },
    { ikona: '🧒', text: 'Dětský koutek a hřiště' },
    { ikona: '🅿️', text: 'Parkování zdarma' },
    { ikona: '📶', text: 'Wi-Fi zdarma' },
    { ikona: '⛷️', text: 'Sjezdovky do 500 m' },
    { ikona: '💳', text: 'Platba kartou' },
  ],

  pobytObsahuje: [
    'Ubytování na 4 noci',
    'Snídaně a večeře formou švédských stolů (bufet)',
    '1 hodina privátní vstup do wellness',
    'Parkování',
  ],
  platnost: '15. 6. 2026 – 20. 12. 2026 a 10. 1. 2027 – 20. 12. 2027',
  mistniPoplatek: 'Místní poplatek obci 2 € / dospělý / noc (platí se na místě)',

  zajimavosti: [
    'Ždiar je tradiční goralská obec s typickou dřevěnou architekturou — jedna z nejhezčích podtatranských vesnic.',
    'Penzion patří do rodiny ubytování „Mountain Resort" v regionu.',
    'V zimě se lyžuje doslova za rohem — Ski Strednica je přímo ve Ždiaru.',
    'Pár minut k polské hranici a do Pienin (splav Dunajce).',
  ],

  kontakt: {
    email: 'info@mrz.sk',
    telefony: ['+421 911 109 202', '+421 917 864 096'],
    adresa: 'Ždiar 451, Slovensko',
  },
}
