# CaseFile

A single-page detective game. Pick a case file, read the brief, visit the scenes, question the suspects, collect evidence in your notebook, then name the culprit.

20 fictional cases across Easy, Standard and Hard difficulty: murders, thefts, frauds, a kidnapping, an arson, a lighthouse disappearance and more.

**Play it:**
- https://hibahnafees.github.io/CaseFile/
- https://66-135-1-187.sslip.io/casefile

## How it works

- Everything is in one file, `index.html`: markup, styles, game engine and all 20 cases. No build step, no backend.
- Your progress is saved in your browser's `localStorage`, so it stays on that device.
- Fonts load from Google Fonts. Otherwise there are no outside dependencies.

## Run it locally

Open `index.html` in a browser. To serve it instead:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

The page is served two ways:

- **GitHub Pages** from the `main` branch root.
- **devbox** (`66-135-1-187.sslip.io`): the server keeps a clone of this repo at `/var/www/casefile`, and nginx serves `/casefile` from it. To update the live copy after pushing:

  ```sh
  ssh devbox 'cd /var/www/casefile && git pull'
  ```

## Adding a case

Cases are objects in the `CASES` array in the `<script>` block. Each one has an `id`, a `number` (`CF-xxxx`), a `title`, a `kind`, a `difficulty`, a `tagline`, a `place` and a `when`, plus its `brief`, `victim`, `suspects`, `locations`, `interviews`, `evidence`, `clues`, `timeline`, `hints` and `solution` (`culprit`, `keyClues`, `proof`, `story`). Copy an existing case and edit it.
