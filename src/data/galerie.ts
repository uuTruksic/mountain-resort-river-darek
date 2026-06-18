// Galerie dalších fotek míst (Wikimedia Commons, miniatury 1280px).
// Připojuje se k výletům podle id; duplicitu hlavní fotky řeší merge ve vylety.ts.
export const galerie: Record<string, string[]> = {
  'monkova-dolina-siroke-sedlo': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Monkova_dolina_03.jpg/1280px-Monkova_dolina_03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Monkova_dolina_07.jpg/1280px-Monkova_dolina_07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Monkova_dolina_12.jpg/1280px-Monkova_dolina_12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Beginning_of_the_Monkova_Valley%2C_Slovakia_05.jpg/1280px-Beginning_of_the_Monkova_Valley%2C_Slovakia_05.jpg',
  ],
  'zelene-pleso': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Zelene_Pleso.JPG/1280px-Zelene_Pleso.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ke%C5%BEmarsk%C3%A9_Zelen%C3%A9_pleso_panor%C3%A1ma.jpg/1280px-Ke%C5%BEmarsk%C3%A9_Zelen%C3%A9_pleso_panor%C3%A1ma.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dolina_Kiezmarska%2C_Zielony_Staw_i_Czarny_Szczyt.jpg/1280px-Dolina_Kiezmarska%2C_Zielony_Staw_i_Czarny_Szczyt.jpg',
  ],
  'vodopad-skok': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vodopad_Skok_in_Mlynicka_dolina.jpg/1280px-Vodopad_Skok_in_Mlynicka_dolina.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Vodopad_Skok.jpg/1280px-Vodopad_Skok.jpg',
  ],
  'bachledka-chodnik-korunami-stromov': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chodnik_Korunami_Stromov.jpg/1280px-Chodnik_Korunami_Stromov.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/The_treetop_walk._%2850359323292%29.jpg/1280px-The_treetop_walk._%2850359323292%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chodn%C3%ADk_na_stromoch%2C_Bachledova_dolina_21_Slovakia.jpg/1280px-Chodn%C3%ADk_na_stromoch%2C_Bachledova_dolina_21_Slovakia.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/It%27s_a_popular_spot_on_a_September_day._%2850359158656%29.jpg/1280px-It%27s_a_popular_spot_on_a_September_day._%2850359158656%29.jpg',
  ],
  'lanovka-skalnate-pleso': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Skalnate_pleso_2010.JPG/1280px-Skalnate_pleso_2010.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Skalnate_pleso_and_cableway_station.jpg/1280px-Skalnate_pleso_and_cableway_station.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Skalnat%C3%A9_pleso_-_panoramio.jpg/1280px-Skalnat%C3%A9_pleso_-_panoramio.jpg',
  ],
  'lanovka-lomnicky-stit': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lomnicky_stit_001.jpg/1280px-Lomnicky_stit_001.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Lomnicky_stit_002.jpg/1280px-Lomnicky_stit_002.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lomnicky_zima.jpg/1280px-Lomnicky_zima.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lomnicky_stit_from_Slavkovsky_stit.jpg/1280px-Lomnicky_stit_from_Slavkovsky_stit.jpg',
  ],
  'hrebienok-vodopady': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Vodop%C3%A1dy_Studen%C3%A9ho_potoka.jpg/1280px-Vodop%C3%A1dy_Studen%C3%A9ho_potoka.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vodopad_studeny_potok1.JPG/1280px-Vodopad_studeny_potok1.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Studen%C3%A1_Voda_Waterfall.jpg/1280px-Studen%C3%A1_Voda_Waterfall.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Vodop%C3%A1dy_Studen%C3%A9ho_potoka_-_panoramio_%281%29.jpg/1280px-Vodop%C3%A1dy_Studen%C3%A9ho_potoka_-_panoramio_%281%29.jpg',
  ],
  'strbske-pleso-okruh': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Strbske_pleso_lake.jpg/1280px-Strbske_pleso_lake.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lake_of_Strbske_pleso.jpg/1280px-Lake_of_Strbske_pleso.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg',
  ],
  'lomnicke-sedlo-vyhliadka': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Skalnate_pleso_v_zime.jpg/1280px-Skalnate_pleso_v_zime.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/%C5%81omnicka_przelecz.JPG/1280px-%C5%81omnicka_przelecz.JPG',
  ],
  'promenada-stary-smokovec': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Stary_Smokovec_center_Tatry.jpg/1280px-Stary_Smokovec_center_Tatry.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Centre_of_Stary_Smokovec_IV.jpg/1280px-Centre_of_Stary_Smokovec_IV.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Stary_Smokovec_mountains.jpg/1280px-Stary_Smokovec_mountains.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Star%C3%BD_Smokovec_z_Peknej_vyhliadky.jpg/1280px-Star%C3%BD_Smokovec_z_Peknej_vyhliadky.jpg',
  ],
  'splav-dunajca': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sp%C5%82yw_Dunajcem_-_Szczawnica_2007.JPG/1280px-Sp%C5%82yw_Dunajcem_-_Szczawnica_2007.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Prze%C5%82om_Dunajca.jpg/1280px-Prze%C5%82om_Dunajca.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dunajec_from_Trzy_Korony.jpg/1280px-Dunajec_from_Trzy_Korony.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sprzelom_Dunajca_mr200701.jpg/1280px-Sprzelom_Dunajca_mr200701.jpg',
  ],
  'ski-strednica-zdiar': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Zdiar11Slovakia1.JPG/1280px-Zdiar11Slovakia1.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Slovakia_Zdiar_22.JPG/1280px-Slovakia_Zdiar_22.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%C5%BDdiar%2C_Vy%C5%A1n%C3%BD_koniec_24_Slovakia_1.jpg/1280px-%C5%BDdiar%2C_Vy%C5%A1n%C3%BD_koniec_24_Slovakia_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/%C5%BDdiar%2C_Slovakia_-_panoramio.jpg/1280px-%C5%BDdiar%2C_Slovakia_-_panoramio.jpg',
  ],
  'ski-bachledka': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Dolina_Bachledzka_MS6.jpg/1280px-Dolina_Bachledzka_MS6.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dolina_Bachledzka_MS7.jpg/1280px-Dolina_Bachledzka_MS7.jpg',
  ],
  'lyzovanie-tatranska-lomnica': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/CableCar-Tatras.jpg/1280px-CableCar-Tatras.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vysok%C3%A9_Tatry%2C_Skalnat%C3%A9_pleso_a_okol%C3%AD_%2820%29.JPG/1280px-Vysok%C3%A9_Tatry%2C_Skalnat%C3%A9_pleso_a_okol%C3%AD_%2820%29.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tatransk%C3%A1_lomnica_-%C5%A0tart-_Skalnat%C3%A9_pleso_-_panoramio.jpg/1280px-Tatransk%C3%A1_lomnica_-%C5%A0tart-_Skalnat%C3%A9_pleso_-_panoramio.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tatransk%C3%A1_Lomnica-Lomnick%C3%BD_%C5%A1t%C3%ADt.jpg/1280px-Tatransk%C3%A1_Lomnica-Lomnick%C3%BD_%C5%A1t%C3%ADt.jpg',
  ],
  'bezky-strbske-pleso': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sneh_na_%C5%A0trbskom_Plese.22_Slovakia_1.jpg/1280px-Sneh_na_%C5%A0trbskom_Plese.22_Slovakia_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%C5%A0trbsk%C3%A9_Pleso_-_zasne%C5%BEen%C3%A9_%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_Pleso_-_zasne%C5%BEen%C3%A9_%C5%A0trbsk%C3%A9_pleso.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/HighTatras13Slovakia.JPG/1280px-HighTatras13Slovakia.JPG',
  ],
  'aquacity-poprad': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/AquaCityPoprad.JPG/1280px-AquaCityPoprad.JPG',
  ],
  'gino-paradise-besenova': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Panorama_besenova_thermal_park.jpg/1280px-Panorama_besenova_thermal_park.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Oddychov%C3%BD_baz%C3%A9n_%282011%29_-_panoramio.jpg/1280px-Oddychov%C3%BD_baz%C3%A9n_%282011%29_-_panoramio.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Besenova_001.jpg/1280px-Besenova_001.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Besenova_002.jpg/1280px-Besenova_002.jpg',
  ],
  'termaly-vrbov': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vrbov%2C_panorama.jpg/1280px-Vrbov%2C_panorama.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vrbov15Slovakia.JPG/1280px-Vrbov15Slovakia.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vrbov15Slovakia1.JPG/1280px-Vrbov15Slovakia1.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vrbov13Slovakia1.JPG/1280px-Vrbov13Slovakia1.JPG',
  ],
  'belianska-jaskyna': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Inside_the_Belianska_cave_-_panoramio.jpg/1280px-Inside_the_Belianska_cave_-_panoramio.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bielanska_jeskyne_vnitrek.JPG/1280px-Bielanska_jeskyne_vnitrek.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Belianska_jaskyna_Palmova_sien.jpg/1280px-Belianska_jaskyna_Palmova_sien.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Belianska_jaskyna_Biele_jazierko.jpg/1280px-Belianska_jaskyna_Biele_jazierko.jpg',
  ],
  'zdiarsky-dom-goralske-muzeum': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Zdiarsky_dom_2009.jpg/1280px-Zdiarsky_dom_2009.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/%C5%BDdiar_typical_wooden_house.JPG/1280px-%C5%BDdiar_typical_wooden_house.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%C5%BDdiar_typical_house.JPG/1280px-%C5%BDdiar_typical_house.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%C5%BDdiar_another_wooden_house.JPG/1280px-%C5%BDdiar_another_wooden_house.JPG',
  ],
  'spissky-hrad': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SK_SN_Spis_castle_2024_1.jpg/1280px-SK_SN_Spis_castle_2024_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/20180503_Zamek_Spiski_2705_DxO.jpg/1280px-20180503_Zamek_Spiski_2705_DxO.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Spis_Castle_1.jpg/1280px-Spis_Castle_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spissky_Hrad_1.jpg/1280px-Spissky_Hrad_1.jpg',
  ],
  'kezmarok-dreveny-kostol': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wooden_articular_church_in_Ke%C5%BEmarok%2C_Slovakia_01.jpg/1280px-Wooden_articular_church_in_Ke%C5%BEmarok%2C_Slovakia_01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wooden_articular_church_in_Ke%C5%BEmarok%2C_Slovakia_12.jpg/1280px-Wooden_articular_church_in_Ke%C5%BEmarok%2C_Slovakia_12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Articular_Church_Kezmarok.jpg/1280px-Articular_Church_Kezmarok.jpg',
  ],
  'spisska-sobota': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/SK-Spisska_Sobota-Georgenkirche-1.jpg/1280px-SK-Spisska_Sobota-Georgenkirche-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SK-Spisska_Sobota-Georgenkirche-2.jpg/1280px-SK-Spisska_Sobota-Georgenkirche-2.jpg',
  ],
  'kastiel-strazky': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Strazky_Kastiel-01.JPG/1280px-Strazky_Kastiel-01.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Strazky_Kastiel-05.jpg/1280px-Strazky_Kastiel-05.jpg',
  ],
  'restauracia-goral-zdiar': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dreven%C3%A1_tradi%C4%8Dn%C3%A1_tatransk%C3%A1_stavba_20_Slovakia_2.jpg/1280px-Dreven%C3%A1_tradi%C4%8Dn%C3%A1_tatransk%C3%A1_stavba_20_Slovakia_2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Slovakia_High_Tatras_Zdiar_0340.jpg/1280px-Slovakia_High_Tatras_Zdiar_0340.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zdiar_2_Tatry.jpg/1280px-Zdiar_2_Tatry.jpg',
  ],
  'levoca-unesco': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/St._James%2C_Levo%C4%8Da%2C_Main_altar%2C_2017.jpg/1280px-St._James%2C_Levo%C4%8Da%2C_Main_altar%2C_2017.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/St._James%2C_Levo%C4%8Da%2C_Main_altar%2C_2017_v2.jpg/1280px-St._James%2C_Levo%C4%8Da%2C_Main_altar%2C_2017_v2.jpg',
  ],
  'tatransky-ladovy-dom-hrebienok': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hrebienok_-_Tatransk%C3%BD_d%C3%B3m.jpg/1280px-Hrebienok_-_Tatransk%C3%BD_d%C3%B3m.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tatransk%C3%BD_d%C3%B3m.jpg/1280px-Tatransk%C3%BD_d%C3%B3m.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/V%C3%BDh%C4%BEad_z_Hrebienka_na_Studen%C3%BA_dolinu%2C_NPR_Studen%C3%A9_doliny_756.jpg/1280px-V%C3%BDh%C4%BEad_z_Hrebienka_na_Studen%C3%BA_dolinu%2C_NPR_Studen%C3%A9_doliny_756.jpg',
  ],
  'tatranska-elektricka-zeleznica': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Stadler_GTW_2-6_-_Tatra_Electric_Railway_%284%29.jpg/1280px-Stadler_GTW_2-6_-_Tatra_Electric_Railway_%284%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cesta_vlakom_pod_Tatrami%2C_pri_Mlynici.jpg/1280px-Cesta_vlakom_pod_Tatrami%2C_pri_Mlynici.jpg',
  ],
}
