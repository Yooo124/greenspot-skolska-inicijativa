# GitHub – GreenSpot: trenutno stanje i završna provjera

## Repozitorij

Javni repozitorij: https://github.com/Yooo124/greenspot-skolska-inicijativa

Razvojni branch: https://github.com/Yooo124/greenspot-skolska-inicijativa/tree/feature/greenspot-solo

Vlasnik repozitorija: `Yooo124`.

Na GitHubu postoje branch-evi `main` i `feature/greenspot-solo`. Kompletna web-stranica i folder `docs/` nalaze se na razvojnom branchu. Merge nije urađen.

## Poziv nastavniku

Prema informaciji učenika, poziv za collaborator pristup je poslan. U GitHubu provjeriti **Settings → Collaborators** i potvrditi da poziv ima status pending ili da je nastavnik već prihvatio poziv. Slanje poziva i njegovo prihvatanje nisu ista stvar.

## Commitovi i autorstvo

Na branchu `feature/greenspot-solo` vidljivo je 12 commitova. Njihove poruke su sadržajne, ali postojeći commitovi koriste generički identitet `GreenSpot Project` i nisu automatski povezani s profilom `Yooo124`. Nemoj prepisivati staru historiju samo da bi se promijenio prikaz autora; to mijenja SHA vrijednosti i može zbuniti pregled. Ako nastavnik traži dokaz autorstva, objasni stanje i pitaj da li želi dodatni, pravilno konfigurisan commit ili drugu provjeru.

`main` i `feature/greenspot-solo` trenutno imaju odvojene početne commitove. Zbog toga GitHub ne može uraditi standardno poređenje grana bez dodatnog usklađivanja historije. Ne radi merge niti force-push bez jasne upute nastavnika.

## Privatnost Git email adrese

U početnom javnom commitu na `main` nalazi se email adresa iz lokalne Git konfiguracije. To ne daje pristup Gmail sandučetu ili lozinci, ali znači da je adresa vidljiva u javnim Git metapodacima.

1. Otvori GitHub **Settings → Emails**: https://github.com/settings/emails
2. Uključi **Keep my email addresses private**.
3. Kopiraj tačnu `noreply` adresu koju GitHub prikazuje.
4. U lokalnom repozitoriju podesi buduće commitove:

```bash
git config user.name "Yooo124"
git config user.email "TVOJA_TACNA_NOREPLY_ADRESA"
```

5. U istim postavkama uključi blokiranje command-line pushova koji otkrivaju privatnu email adresu, ako je ponuđeno.

Promjena postavki ne uklanja adresu iz već objavljenih commitova. Uklanjanje iz stare historije zahtijeva kontrolisano prepisivanje historije i force-push; nemoj to raditi samoinicijativno.

## Ograničavanje ChatGPT/GitHub aplikacije

Provjeri **GitHub Settings → Applications → Installed GitHub Apps**. Instalacija povezana s ovim zadatkom trenutno je podešena na `All repositories`. Ako želiš najmanji potreban pristup, promijeni `Repository access` na `Only select repositories` i odaberi samo `greenspot-skolska-inicijativa`. Prije potvrde pregledaj stvarne dozvole aplikacije na toj stranici.

## Rok

Rok u zadatku bio je 15. 11. 2026. u 22:00. GitHub commitovi na razvojnom branchu datirani su 16. 11. 2026. Predaja je stoga objavljena nakon roka; nastavnik odlučuje o prihvatanju zakašnjele predaje.

## Završna lista

- [ ] Popuniti ime, odjeljenje i ime nastavnika na naslovnoj stranici izvještaja.
- [ ] Ručno testirati stranicu u pregledniku na računaru i mobitelu.
- [ ] Provjeriti status poziva nastavniku.
- [ ] Dodati ažurirani izvještaj u `docs/` i pushati promjene na postojeći branch, bez mergea u `main`.
- [ ] Ne uključivati privatne tokene, lozinke, `.env` datoteke ili lične email adrese u javne datoteke projekta.
