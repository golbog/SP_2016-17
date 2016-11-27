Opis aplikacije:
Tema: 
Tehnična podpora

Problem: 
Podjetja, ki imajo tehnično podporo imajo težave z sistematskim in hitrim reševanjem problemov strank/uporabnikov. Prav tako stranke/uporabniki morajo klicati po telefonu in čakati po ure na prostega strokovnjaka in vsakič na novo razlagati problem, četudi se jim ponavlja.

Rešitev: 
Spletna aplikacija za pomoč pri tehnični podpori. Namenjena je trem različnim vlogam:
 - Stranka: Lahko vnese zahtevo za podpora, kjer poda opis napake. Lahko ponovno odpre incident iz zgodovine (če se napaka ponovi).
 - Prvi nivo podpore: Lahko vnese opis napake, v primeru da stranka kliče. Pregleda nove zahtevke in poskuša podati rešitev. Prav tako lahko stranko prosi za dodatne podatke.
 - Strokovnjaki (drugi nivo podpore): V kolikor problema ne reši prvi nivo podpore, se zahtevku poviša prioriteta in ga poskuša rešiti strokovnjak. Zopet lahko strokovnjak prosi za dodatne informacije stranko.

Ciljna publika so torej na prvem mestu vsi uporabniki stirtev odjetja, ki uporablja to spletno aplikacijo.
Hkrati pa so tudi uslužbenci tehnične podpore (strokovnjaki prvega in drugega nivoja), ki se morajo prvo prijaviti v spletno aplikacijo, kjer dostopajo do posebnih strani, ki niso dostopne navadnim uproabnikom. 
Glede na ciljno publiko je aplikacija lahko uporabljena na vseh napravah (osebni računalniki, tablice in pametni mobilni telefoni), temu primerno se prilagaja širini zaslona.

S samim razvojem v različnih brskalnikih nisem imel večjih problemov. Izogibal sem se uporabi css lastnostim, ki jo imajo le določeni brskalniki. Največ problemov sem imel z nastavljanjem izvlečnega menija, da je bil na sredini. Tukaj se še zmerom vsak brskalnik drugače obnaša, vendar ni moteče pri končni uproabi.

Največ truda sem vložil v razvoj gradnika, ki "dinamično" prikazuje stanje zaprtih in še odprtih zahtevkov. Nad drugem mestu pa je prilagajanje strani širini ekrana. Že v osnovi sem probaval delati take elemente, ki ne bodo imeli problemov z različnimi širinami ekrana. Tisti ki pa so ostali s problemi, sem jih pa čim bolj stestrial in prilagodil, da delujejo primerno.

Seveda bi lahko dodal še ogromno javascript (AJAX) funkcionalnosti, ki bi omogočale, da bi po takojšni ustvaritvi zahtevka, se pojavil na "dashboard". Tukaj je seveda še kar nekaj podobnih "quality of life" funkcionalnosti.  