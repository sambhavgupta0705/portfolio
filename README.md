# Sambhav Gupta, portfolio

Next.js (App Router) + TypeScript, plain CSS with design tokens, fonts via `next/font`. No UI library.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in GITHUB_TOKEN (optional locally)
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run lint`, `npm run typecheck`, `npm run build`, `npm start`.

## Routes

`/` is the board. Section pages: `/projects`, `/experience`, `/writing`, `/moments`, `/fitness`, `/contact` (numbered 01 to 06). `Esc` goes back to the board. The theme follows the system; the toggle overrides it and is saved in `localStorage`.

## Editing content (`/content`)

| File | What it controls |
| --- | --- |
| `links.ts` | Social links, resume URL, Writing rows, the Instagram row under Fitness, Contact postcards, site name and tagline, and **`email`**. |
| `projects.ts` | Project rows (`category` is `"opensource"` or `"personal"`, optional `stack`). Also `lastKnownContributions`, the fallback for the GitHub card. |
| `experience.ts` | Places, roles, dates and the two highlight lines per place. `current: true` shows the dates in the accent colour. |
| `races.ts` | Fitness cards in date order. `tone` is `"time"`, `"quiet"` or `"now"`. |
| `moments.ts` | Event rows: `title`, `date`, `place`, optional `photos`. |

**Email address:** set `email` in `content/links.ts` (for example `"hello@yourdomain.com"`). The postcard turns into a `mailto:` link. While it is empty, the card shows "address coming with the domain".

## Fitness photos

Drop a JPG at `public/fitness/<slug>.jpg`, where `<slug>` is the race's `slug` in `content/races.ts`. For example `public/fitness/ndm.jpg`. Cards without a file show the striped "photo soon" placeholder. Photos are 4:3 and are cropped to fit.

## Adding a moment

1. Put photos in `public/moments/`.
2. Add an entry to `content/moments.ts`:
   ```ts
   { title: "Community meetup", date: "Mar 2026", place: "Bengaluru", photos: ["meetup-1.jpg", "meetup-2.jpg"] }
   ```
   While the array is empty, the page shows the "Adding soon" row.

## GitHub contributions (live)

The Projects page shows lifetime contributions for `sambhavgupta0705`. It runs on the server only: it reads the account creation year, then sums `contributionsCollection.contributionCalendar.totalContributions` for each year with the GitHub GraphQL API. The result is cached for 24 hours (`revalidate = 86400`). If the token is missing or the call fails, the page shows `lastKnownContributions` from `content/projects.ts` and never errors.

1. Create a token at GitHub → Settings → Developer settings → Personal access tokens, with the **`read:user`** scope.
2. Set it as `GITHUB_TOKEN` (`.env.local` locally, Project Settings → Environment Variables on Vercel).

To count private work, turn on **"Include private contributions on my profile"** in GitHub → Profile → Contribution settings. Without it, the API only returns public contributions.

## Deploy on Vercel

1. Push the project to a Git repository and import it at vercel.com/new. The Next.js preset is detected automatically.
2. Add `GITHUB_TOKEN` and `NEXT_PUBLIC_SITE_URL` (your production URL, used for canonical links, sitemap and Open Graph) as environment variables.
3. Deploy. Later edits to `/content` or `/public` redeploy on every push.

`NEXT_PUBLIC_SITE_URL` falls back to `https://example.com` until you set it.
