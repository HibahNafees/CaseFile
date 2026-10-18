# CaseFile

A single-page detective game. Pick a case file, read the brief, visit the scenes, question the suspects, collect evidence in your notebook, then name the culprit.

20 fictional cases across Easy, Standard and Hard difficulty: murders, thefts, frauds, a kidnapping, an arson, a lighthouse disappearance and more.

**Play it:**
- https://hibah-casefile.vercel.app
- https://hibahnafees.github.io/CaseFile/
- https://66-135-1-187.sslip.io/casefile

## How it works

- `index.html` holds the markup, styles, game engine and the first 3 cases.
- `more1.js` to `more4.js` each add more cases to the `CASES` array with `CASES.push(...)`, and `index.html` loads them in order before the engine starts.
- No build step, no backend.
- Your progress is saved in your browser's `localStorage`, so it stays on that device.
- Fonts load from Google Fonts. Otherwise there are no outside dependencies.

## Run it locally

Open `index.html` in a browser (keep the `more*.js` files next to it). To serve it instead:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

The page is served three ways:

- **Vercel** (`hibah-casefile.vercel.app`): deploys automatically on every push to `main`.
- **GitHub Pages** from the `main` branch root.
- **devbox** (`66-135-1-187.sslip.io`): the server keeps a clone of this repo at `/var/www/casefile`, and nginx serves `/casefile` from it. To update the live copy after pushing:

  ```sh
  ssh devbox 'cd /var/www/casefile && git pull'
  ```

## Adding a case

Cases are objects in the `CASES` array: the first few are in `index.html`, and the rest are in `more1.js` to `more4.js`. To add one, put it in a `CASES.push(...)` call in one of those files, or in a new `more5.js` that you load with another `<script src>` tag after `more4.js`. Each one has an `id`, a `number` (`CF-xxxx`), a `title`, a `kind`, a `difficulty`, a `tagline`, a `place` and a `when`, plus its `brief`, `victim`, `suspects`, `locations`, `interviews`, `evidence`, `clues`, `timeline`, `hints` and `solution` (`culprit`, `keyClues`, `proof`, `story`). Copy an existing case and edit it.
