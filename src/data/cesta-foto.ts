// Fotky a delší popisy zastávek po cestě (Wikimedia Commons, miniatury 1280px).
// Připojuje se k zastávkám v src/data/cesta.ts podle id.
type ZastavkaFoto = { foto: string; galerie: string[]; popisDlouhy: string }

export const zastavkyFoto: Record<string, ZastavkaFoto> = {
  'velke-mezirici': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_n%C3%A1m%C4%9Bst%C3%AD_a_v%C4%9B%C5%BE.jpg/1280px-Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_n%C3%A1m%C4%9Bst%C3%AD_a_v%C4%9B%C5%BE.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Overview_of_Castle_in_Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD%2C_%C5%BD%C4%8F%C3%A1r_nad_S%C3%A1zavou_District.jpg/1280px-Overview_of_Castle_in_Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD%2C_%C5%BD%C4%8F%C3%A1r_nad_S%C3%A1zavou_District.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_kostel_sv._Mikul%C3%A1%C5%A1e_1.jpg/1280px-Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_kostel_sv._Mikul%C3%A1%C5%A1e_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_n%C3%A1m%C4%9Bst%C3%AD_1.jpg/1280px-Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_n%C3%A1m%C4%9Bst%C3%AD_1.jpg',
    ],
    popisDlouhy:
      'Velké Meziříčí je město na východě Vysočiny, na soutoku řek Oslavy a Balinky. Dominantou je renesanční zámek nad městem, který vznikl přestavbou původního románsko-gotického hradu v 16. století a dnes v něm sídlí muzeum. Historické jádro s náměstím obklopeným renesančními domy je vyhlášeno městskou památkovou zónou. Nad náměstím se tyčí kostel svatého Mikuláše, jehož 64 metrů vysoká věž slouží jako vyhlídková.',
  },
  'slavkov-u-brna': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Slavkov_u_Brna_-_Castle.jpg/1280px-Slavkov_u_Brna_-_Castle.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Z%C3%A1mek_Slavkov_u_Brna_z_parku_608x900.jpg/1280px-Z%C3%A1mek_Slavkov_u_Brna_z_parku_608x900.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Austerlitz_Schloss_01.jpg/1280px-Austerlitz_Schloss_01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Schloss_Slavkov_u_Brna_%28Austerlitz%29_%2837968769745%29.jpg/1280px-Schloss_Slavkov_u_Brna_%28Austerlitz%29_%2837968769745%29.jpg',
    ],
    popisDlouhy:
      'Slavkov u Brna, německy Austerlitz, leží východně od Brna a jeho dominantou je barokní Slavkovský zámek, který do dnešní podoby přestavěl koncem 17. století italský architekt Domenico Martinelli. K zámku patří rozsáhlý zámecký park se symetrickými bazény a sochařskou výzdobou. Město je úzce spjato s bitvou u Slavkova z 2. prosince 1805, takzvanou bitvou tří císařů, v níž se střetla armáda Napoleona I. s vojsky rakouského a ruského císaře. Na zámku bylo po bitvě podepsáno francouzsko-rakouské příměří.',
  },
  'zilina-marianske-namestie': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Marianske_namestie_in_Zilina_%281%29.jpg/1280px-Marianske_namestie_in_Zilina_%281%29.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Podloub%C3%AD%2C_Mari%C3%A1nsk%C3%A9_n%C3%A1mestie%2C_%C5%BDilina%2C_okres_%C5%BDilina%2C_%C5%BDilinsk%C3%BD_kraj%2C_Slovensko.jpg/1280px-Podloub%C3%AD%2C_Mari%C3%A1nsk%C3%A9_n%C3%A1mestie%2C_%C5%BDilina%2C_okres_%C5%BDilina%2C_%C5%BDilinsk%C3%BD_kraj%2C_Slovensko.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/The_statue_of_Immaculata_in_Zilina_%288399301671%29.jpg/1280px-The_statue_of_Immaculata_in_Zilina_%288399301671%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Church_of_the_Conversion_of_Saint_Paul_in_%C5%BDilina_2022.jpg/1280px-Church_of_the_Conversion_of_Saint_Paul_in_%C5%BDilina_2022.jpg',
    ],
    popisDlouhy:
      'Mariánske námestie tvoří historické jádro Žiliny a jeho počátky sahají před rok 1300. Náměstí má přibližně čtvercový půdorys o straně asi 100 metrů a obklopují ho měšťanské domy s krytými podloubími (laubně), kde dříve sídlily obchody a dílny. Uprostřed stojí barokní mariánský sloup se sochou Panny Marie z roku 1738. Při náměstí je dvouvěžový barokní kostel z roku 1754 a celé centrum je městskou památkovou rezervací.',
  },
  'vlkolinec-skanzen': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vlkol%C3%ADnec_panorama_WF6.jpg/1280px-Vlkol%C3%ADnec_panorama_WF6.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Vlkol%C3%ADnec_Main_street.JPG/1280px-Vlkol%C3%ADnec_Main_street.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vlkol%C3%ADnec_%C4%BEudov%C3%A9_domy.jpeg/1280px-Vlkol%C3%ADnec_%C4%BEudov%C3%A9_domy.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Vlkol%C3%ADnec_dreven%C3%A1_zvonica.jpeg/1280px-Vlkol%C3%ADnec_dreven%C3%A1_zvonica.jpeg',
    ],
    popisDlouhy:
      'Vlkolínec je památková rezervace lidové architektury, od roku 1993 zapsaná na seznamu světového dědictví UNESCO. Osada leží v horách na výběžku Velké Fatry nad Ružomberkem a dochovalo se v ní zhruba padesát roubených dřevěných domů. Na rozdíl od skanzenu jde o stále obývané sídlo, kde část stavení trvale slouží k bydlení. Mezi nejstarší stavby patří roubená dřevěná zvonice z roku 1770.',
  },
  'liptovska-mara': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Liptovsk%C3%A1_Mara_a_N%C3%ADzk%C3%A9_Tatry.jpg/1280px-Liptovsk%C3%A1_Mara_a_N%C3%ADzk%C3%A9_Tatry.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Liptovsk%C3%A1_Mara%2C_Liptov%2C_Slovakia.jpg/1280px-Liptovsk%C3%A1_Mara%2C_Liptov%2C_Slovakia.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lipt.Mara%2C_Lipt._Trnovec_a_N%C3%ADzk%C3%A9_Tatry_%28foten%C3%A9_z_Hr%C3%A1dku%29.jpg/1280px-Lipt.Mara%2C_Lipt._Trnovec_a_N%C3%ADzk%C3%A9_Tatry_%28foten%C3%A9_z_Hr%C3%A1dku%29.jpg',
    ],
    popisDlouhy:
      'Liptovská Mara je největší vodní nádrž svého druhu na Slovensku a leží přímo na trase podél dálnice D1. U hráze se otevírá široký rozhled přes hladinu na hřebeny Nízkých a Vysokých Tater i na Chočské vrchy — příjemné místo, kde se na chvíli zastavit a nadechnout. Je to nenáročná zastávka na pár minut: projít se kousek u vody, vyfotit panorama a dát si kávu, aniž byste z dlouhé cesty ztratili mnoho času.',
  },
  'spisska-sobota-zastavka': {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Square_of_Spisska_Sobota_2.jpg/1280px-Square_of_Spisska_Sobota_2.jpg',
    galerie: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/SK-Spisska_Sobota-Georgenkirche-1.jpg/1280px-SK-Spisska_Sobota-Georgenkirche-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SK-Spisska_Sobota-Georgenkirche-2.jpg/1280px-SK-Spisska_Sobota-Georgenkirche-2.jpg',
    ],
    popisDlouhy:
      'Spišská Sobota je městská památková rezervace a dnes součást Popradu. Trojúhelníkové náměstí lemují gotické, renesanční a barokní měšťanské domy s podloubími a šindelovými střechami. Dominantou je kostel svatého Juraja s pozdně gotickým hlavním oltářem z dílny Mistra Pavla z Levoče z roku 1516. Klidná zastávka těsně před cílem, ideální na protažení a kávu.',
  },
}
