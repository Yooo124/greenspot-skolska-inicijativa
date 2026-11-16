# GreenSpot – školska eko-inicijativa

Responzivna prezentacijska web-stranica izrađena pomoću HTML5, CSS3 i JavaScripta.

## 1. Kako pokrenuti stranicu

**Najjednostavnije:** otvoriti datoteku `index.html` u Chromeu, Edgeu ili Firefoxu.

**Preporučeno:** u Visual Studio Codeu otvoriti cijeli folder `GreenSpot_Projekt` i pokrenuti `index.html` pomoću ekstenzije Live Server. Nije potrebna instalacija Node.js-a, baze podataka ili dodatnih biblioteka.

## 2. Šta stranica sadrži

- početnu hero sekciju i glavni poziv na akciju;
- sekciju „O nama“;
- četiri kartice aktivnosti;
- tri ogledna projekta;
- sekciju o očekivanom uticaju inicijative;
- kontakt/prijavnu formu s JavaScript validacijom;
- mobilnu navigaciju i responzivan raspored.

**Važno:** kontakt-forma je demonstracijska. JavaScript provjerava obavezna polja i prikazuje poruku, ali se podaci ne šalju na server i ne pohranjuju.

## 3. Struktura projekta

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
│   ├── greenspot-mark.svg
│   ├── plant-illustration.svg
│   ├── garden-illustration.svg
│   └── cleanup-illustration.svg
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

## 4. Git i GitHub – obavezni završni koraci

Lokalna historija je pripremljena s deset smislenih commitova na branchu `feature/greenspot-solo`. Branch `main` je odvojen od razvojnog brancha i na njega nije direktno rađeno. Prije objave provjeriti autora commitova i po potrebi preimenovati branch. Trenutni commitovi imaju neutralnog autora `GreenSpot Project`; lokalna Git konfiguracija za buduće commitove ne mijenja autora već kreiranih commitova.

### 4.1 Postavi svoj Git identitet

U terminalu unutar foldera projekta izvrši:

```bash
git config user.name "Ime Prezime"
git config user.email "tvoj-github-email@example.com"
```

Ovo postavlja identitet za buduće commitove. Već postojeći commitovi zadržavaju autora `GreenSpot Project`. Ako nastavnik traži da svaki commit bude vezan za tvoj GitHub profil, autorstvo postojećih commitova mora se promijeniti prije pushanja. Nemoj naslijepo mijenjati historiju; javi se za tačne korake nakon što potvrdiš da je to zaista potrebno.

### 4.2 Kreiraj GitHub repozitorij

1. Prijavi se na GitHub.
2. Izaberi **New repository**.
3. Naziv: `greenspot-skolska-inicijativa`.
4. Postavi repozitorij na **Public**.
5. Nemoj označiti opcije za automatsko dodavanje README, `.gitignore` ili licence jer su datoteke već u lokalnom projektu.
6. Kreiraj repozitorij i kopiraj HTTPS adresu koju GitHub prikaže.

### 4.3 Dodaj nastavnika kao collaboratora

U GitHub repozitoriju otvori **Settings → Collaborators** (ili **Collaborators and teams**) → **Add people**. Unesi tačno:

`geniuslab.ba@gmail.com`

Pošalji poziv i provjeri da je poziv poslan. Nastavnik možda mora prihvatiti poziv prije nego dobije pristup.

### 4.4 Poveži lokalni projekat s GitHubom i pushaj branch

U terminalu unutar foldera projekta zamijeni URL svojim URL-om repozitorija. Ako nastavnik traži branch s tvojim imenom, prvo ga preimenuj (dok si na razvojnom branchu): `git branch -m feature/ime-prezime`. U naredbama koristi ime brancha koje zaista postoji.

```bash
git remote add origin https://github.com/TVOJ-GITHUB-NALOG/greenspot-skolska-inicijativa.git
git push -u origin main
git push -u origin feature/greenspot-solo
```

`main` se push-a prvi da GitHub postavi `main` kao početni branch. Razvojni branch se push-a odvojeno i ne spaja se u `main`.

Ako `origin` već postoji, nemoj ponovo dodavati remote; provjeri ga naredbom `git remote -v`.

Prvi push objavljuje razvojni branch. Drugi push objavljuje početni `main` branch. Nemoj raditi merge i nemoj slati razvojne promjene direktno na `main`.

### 4.5 Provjeri GitHub

```bash
git branch -a
git log --oneline --decorate --all -12
git status
```

Na GitHubu otvori **Branches** i provjeri da postoje `main` i `feature/greenspot-solo`. Otvori razvojni branch i provjeri da se vidi najmanje deset commitova. Nemoj kliknuti **Merge pull request** dok nastavnik ne pregleda i ne odobri rad.

## 5. Napomena o roku i samostalnom radu

Rok naveden u zadatku bio je **15. 11. 2026. u 22:00**. Današnji datum je **16. 11. 2026.**, pa je rok već prošao. Projekat je pripremljen za objavu, ali push nakon roka ne mijenja činjenicu da je predaja zakašnjela. Obrati se nastavniku i pitaj da li prihvata naknadnu predaju.

Upute su prvobitno napisane za rad u paru. Ovaj projekat je urađen samostalno, pa postoji jedan razvojni branch. Nemoj predstavljati nepostojećeg partnera niti izmišljati njegove commitove.

## 6. Dokumentacija

Folder `docs/` sadrži projektni izvještaj u DOCX i PDF formatu, desktop i mobilni wireframe, desktop i mobilni mockup, kratku prezentacijsku skriptu i GitHub checklistu.
