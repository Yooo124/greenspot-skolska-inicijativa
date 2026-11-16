# GitHub upute – GreenSpot

## Prije pushanja

- [ ] Prijaviti se na vlastiti GitHub račun.
- [ ] Kreirati javni prazan repozitorij `greenspot-skolska-inicijativa`.
- [ ] Dodati `geniuslab.ba@gmail.com` kao collaboratora.
- [ ] Provjeriti poziv za collaboratora.
- [ ] Postaviti vlastiti Git identitet ako je potrebno.
- [ ] Kopirati HTTPS URL repozitorija.

## Komande

```bash
git remote add origin https://github.com/TVOJ-GITHUB-NALOG/greenspot-skolska-inicijativa.git
git push -u origin feature/greenspot-solo
git push origin main
git branch -a
git log --oneline --decorate --all -12
git status
```

Ako `origin` već postoji, prvo pokrenuti `git remote -v`; ne dodavati drugi put isti remote.

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
