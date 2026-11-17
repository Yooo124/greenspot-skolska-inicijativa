# GreenSpot – školska eko-inicijativa

Responzivna prezentacijska web-stranica izrađena pomoću HTML5, CSS3 i JavaScripta.

## Kako pokrenuti stranicu

Najjednostavnije je otvoriti `index.html` u Chromeu, Edgeu ili Firefoxu. U Visual Studio Codeu može se otvoriti cijeli folder i pokrenuti `index.html` pomoću ekstenzije Live Server. Nije potrebna instalacija Node.js-a, baza podataka niti dodatne biblioteke.

## Šta stranica sadrži

- početnu hero sekciju i glavni poziv na akciju;
- sekciju „O nama“;
- četiri kartice aktivnosti;
- tri ogledna projekta;
- sekciju o očekivanom uticaju inicijative;
- kontakt/prijavnu formu s JavaScript validacijom;
- mobilnu navigaciju i responzivan raspored.

**Važno:** kontakt-forma je demonstracijska. JavaScript provjerava obavezna polja i prikazuje poruku, ali podaci se ne šalju na server niti pohranjuju.

## Struktura projekta

```text
GreenSpot_Projekt/
├── index.html
├── README.md
├── .gitignore
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── script.js
│   └── form.js
├── assets/
│   └── SVG znak i ilustracije
└── docs/
    ├── Izvjestaj_GreenSpot.docx
    ├── Izvjestaj_GreenSpot.pdf
    ├── wireframe_desktop.png
    ├── wireframe_mobile.png
    ├── mockup_desktop.png
    ├── mockup_mobile.png
    ├── Prezentacija_i_checklista.md
    └── GitHub_upute.md
```

## GitHub – trenutno stanje

Javni repozitorij: https://github.com/Yooo124/greenspot-skolska-inicijativa

Glavni razvojni branch: `feature/greenspot-solo`.

Na razvojnom branchu nalazi se kompletna stranica, dokumentacija, wireframe, mockup i 12 commitova. `main` je odvojen i sadrži početni README. Merge nije urađen, u skladu s pravilom da se čeka pregled nastavnika.

Poziv nastavniku za collaborator pristup je poslan prema informaciji učenika; u GitHub postavkama treba provjeriti je li poziv prihvaćen.

**Napomena o autorstvu:** raniji commitovi imaju generički identitet `GreenSpot Project`, pa nisu automatski povezani s profilom `Yooo124`. Postojeća historija nije prepisivana. Za buduće commitove koristi GitHubovu privatnu `noreply` adresu; upute su u `docs/GitHub_upute.md`.

**Napomena o rokovima:** zadani rok bio je 15. 11. 2026. u 22:00, a commitovi razvojnog brancha datirani su 16. 11. 2026. Prihvatanje zakašnjele predaje zavisi od nastavnika.

## Privatnost i sigurnost

Ne stavljati lozinke, privatne tokene, API ključeve ili `.env` datoteke u javni repozitorij. Prije budućih commitova podesiti privatnu GitHub `noreply` adresu. Promjena email postavki ne mijenja retroaktivno ranije commitove.
