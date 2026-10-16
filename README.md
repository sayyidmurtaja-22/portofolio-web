# Sayyid Murtaja Portfolio

React, Vite and Tailwind portfolio with an optional NestJS backend.

## Run locally

Use Node.js 22.12+ (Node.js 24 also works) and npm.

```sh
cd frontend
npm ci
npm run dev
```

The frontend runs at http://localhost:3000. Contact works through the visitor's email app by default; the backend is not required to serve the portfolio.

## Verification

```sh
cd frontend
npm run check
```

This runs ESLint, component tests and a production build. Tests cover mobile menu Escape/focus behavior, scroll restoration after a desktop resize, the nested Contact navigation indicator, and direct email when no contact API is configured.

```sh
cd backend
npm ci
npm test
```

The backend test builds the service, starts an ephemeral local HTTP server, and checks input validation and the unavailable-delivery response. GitHub Actions runs frontend and backend checks on pushes and pull requests.

## Contact API

The optional backend runs with `npm run start:dev` in `backend`. `PORT` defaults to 3001. `FRONTEND_URL` accepts comma-separated frontend origins.

`POST /contact` validates `name`, `email` and `message`. No mail delivery or storage provider is configured: valid submissions return HTTP 503 and never claim that a message was delivered. Invalid input returns HTTP 400.

Leave `VITE_API_URL` unset for the working direct-email experience. Enable the form only after implementing and verifying real delivery, then set this build-time variable to the backend's HTTPS origin. Never place provider credentials in `VITE_*` variables.

## Content and assets

- Components live in `frontend/src/components`.
- Project data is in `Projects.jsx`; use actual project URLs and verified claims when adding case studies.
- `frontend/public/resume.pdf` is the current CV.
- Certificates are in `frontend/public/sertif`.
- Metadata in `frontend/index.html` uses the production domain below.

The two large GIM certificates were compressed without changing extracted text or page rendering. Further reductions would need a separate image-quality review.

## Deploy

The existing Vercel project is `tekno-sea/murtaja-portofolio`, with `frontend` as the local deployment directory and Vite as the framework.

```sh
cd frontend
npm run check
vercel link --project murtaja-portofolio --scope tekno-sea
vercel --prod --scope tekno-sea
```

Production: https://murtaja-portofolio.vercel.app/

The frontend deployment does not deploy the optional NestJS backend. Review `npm audit` separately from build results; a successful build does not establish that dependencies are vulnerability-free.
