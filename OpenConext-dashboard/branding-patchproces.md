# Patchproces govconext dashboard branding

Upstream repo: https://github.com/prolocation/govconext-dashboard-upstream

## Opzetten repository

```sh
# clone en voeg upstream toe
git clone git@github.com:prolocation/govconext-dashboard-upstream.git
git remote add upstream https://github.com/OpenConext/OpenConext-dashboard.git

# check
$ git remote -v
origin  git@github.com:prolocation/govconext-dashboard-upstream.git (fetch)
origin  git@github.com:prolocation/govconext-dashboard-upstream.git (push)
upstream        https://github.com/OpenConext/OpenConext-dashboard.git (fetch)
upstream        https://github.com/OpenConext/OpenConext-dashboard.git (push)

# Haal upstream tags/branches op
git fetch upstream
```

## Ophalen changes vorige versie

```sh
# Checkout van huidige versie
git checkout govconext-dashboard-13.0.8
# diff met upstream
git diff 13.0.8 > /tmp/govconext.diff
```

## Branchen nieuwe versie

```sh
# Checkout huidige versie
git checkout 13.0.9
# Branch vanaf hier
git checkout -b govconext-dashboard-13.0.9
# apply patches
patch -p1 < /tmp/govconext.diff
```

Nu is de kans er dat er dingen niet clean patchen. Dan moet je de reject files even opzoeken en nalopen en met de hand aanpassen. 

```sh
# Overzicht van rejects files.
find . -name \*.rej
```

Als alles gepatched is, vergeet niet de `.rej` en `.orig` bestanden op te ruimen.

## Opleveren

```sh
# Pushen/commit govconext branch naar github
git commit -m "rebranding" -a
git push --set-upstream origin govconext-dashboard-13.0.9
```
