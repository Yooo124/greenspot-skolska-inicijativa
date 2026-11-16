# GitHub upute – GreenSpot

## Trenutno stanje i završni koraci

GitHub račun je povezan i potvrđeni korisnički naziv je `Yooo124`. Lokalni repozitorij već ima postavljen `origin`:

`https://github.com/Yooo124/greenspot-skolska-inicijativa.git`

U ovoj fazi repozitorij još nije kreiran na GitHubu i poziv nastavniku nije poslan. Kreiraj prazan javni repozitorij navedenog naziva, pa nastavi naredbama ispod.

- [ ] Kreirati javni prazan repozitorij `greenspot-skolska-inicijativa` na računu `Yooo124`.
- [ ] Dodati `geniuslab.ba@gmail.com` kao collaboratora u **Settings → Collaborators**.
- [ ] Provjeriti da je poziv poslan (nastavnik ga treba prihvatiti).
- [ ] Provjeriti `git remote -v` da `origin` pokazuje na navedeni URL.

## Komande

```bash
git remote -v
git push -u origin main
git push -u origin feature/greenspot-solo
git branch -a
git log --oneline --decorate --all -12
git status
```

`origin` je već postavljen u dostavljenoj lokalnoj Git historiji. Nemoj ponovo dodavati isti remote.

## Pravila zadatka

- Ne praviti commit direktno na `main`.
- Ne raditi merge u `main` prije nastavnikove provjere i odobrenja.
- Na razvojnome branchu mora biti najmanje 10 smislenih commitova.
- Nastavnik mora biti dodat kao collaborator.
- Provjeriti da su svi commitovi pushani na GitHub.

## Posebne napomene

- Projekat je urađen samostalno, a izvorni zadatak predviđa par. Nastavniku treba iskreno reći da postoji samo jedan autor/branch.
- Rok iz dokumenta bio je 15. 11. 2026. u 22:00 i već je prošao; zatražiti prihvatanje zakašnjele predaje.
- Forma na web-stranici je demonstracijska i ne šalje stvarne podatke.


Napomena: pripremljeni commitovi imaju neutralnog autora `GreenSpot Project`. `git config user.name` i `git config user.email` mijenjaju identitet budućih commitova, ne postojećih. Ako nastavnik zahtijeva da svih deset commitova bude povezano s tvojim GitHub profilom, potrebno je kontrolisano prepisati historiju prije pushanja.
