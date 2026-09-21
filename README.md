# idaafa

Lead-capture marketing site for idaafa — one page, dark editorial design, working contact pipeline.

## Structure

```
frontend/   React + TypeScript + Vite (plain CSS)
backend/    Express.js + MongoDB + Resend + Turnstile
api/        Vercel serverless entry (wraps Express)
```

## Quick start

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Runs at http://localhost:5173

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Runs at http://localhost:8000

The Vite dev server proxies `/api` to the backend.

From the repo root you can also use npm workspaces:

```bash
npm install
npm run dev:frontend
npm run dev:backend
```

## Deploy on Vercel (frontend + API together)

One Vercel project serves the static site and the Express API on the same domain (`/api/contact`), so the form keeps using relative URLs.

1. Push this repo to GitHub and import it in [Vercel](https://vercel.com) (root directory = repo root, not `frontend/`).
2. Vercel will use `vercel.json` (`npm install` + `npm run build`, output `frontend/dist`).
3. Add environment variables in the Vercel project settings:

| Variable | Notes |
|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Build-time (frontend) |
| `VITE_PLAUSIBLE_DOMAIN` | Build-time (optional) |
| `MONGO_URL` | Atlas connection string |
| `DB_NAME` | e.g. `idaafa` |
| `RESEND_API_KEY` | Resend |
| `MAIL_FROM` | `contact@idaafa.com` |
| `MAIL_TO_STUDIO` | Studio inbox |
| `TURNSTILE_SECRET_KEY` | Turnstile secret |
| `CORS_ORIGINS` | Your Vercel URL, e.g. `https://idaafa.vercel.app` (add custom domain later) |
| `SITE_URL` | Same public URL |

4. Deploy. Check `https://your-app.vercel.app/api/health` and submit a test lead.

**Note:** Rate limiting is in-memory, so it is weaker on serverless (each instance has its own memory). Turnstile + honeypot still protect the form.

## Environment variables

### Frontend (`frontend/.env`)

| Variable | Purpose |
|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible analytics domain |

### Backend (`backend/.env`)

| Variable | Purpose |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `DB_NAME` | Database name |
| `RESEND_API_KEY` | Resend API key |
| `MAIL_FROM` | Sender address (`contact@idaafa.com`) |
| `MAIL_TO_STUDIO` | Notification inbox |
| `TURNSTILE_SECRET_KEY` | Turnstile secret |
| `CORS_ORIGINS` | Allowed frontend origins |
| `SITE_URL` | Public site URL |

## Email deliverability (required before launch)

Auto-replies and lead notifications only work when:

1. `contact@idaafa.com` is a live mailbox
2. `idaafa.com` is verified in Resend with SPF, DKIM, and DMARC

Until then, leads save to MongoDB but email may not arrive.

**Pre-launch check:** submit a real test lead and confirm it lands in the inbox and the auto-reply is not in spam.

## Production build (local)

```bash
npm run build
```

## Reference

Design and copy match the preview at https://lead-capture-203.preview.emergentagent.com/

Requirements source: `idaafa-developer-handoff.pdf`
