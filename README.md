# Mustqbil — Landing Page

A landing page built with [TanStack Start](https://tanstack.com/start) (React 19), Vite, Tailwind CSS v4, and Radix UI.

## Requirements

- **Node.js** `>= 20` (LTS recommended). Check your version with `node -v`.
  Download it from [nodejs.org](https://nodejs.org/).
- A package manager — **pnpm** (recommended) or **npm** (bundled with Node).
  Install pnpm once with `npm install -g pnpm`.

## Get the code

Clone with Git:

```bash
git clone <repository-url>
cd Mustqbil-round2-landing
```

Or **download** the project as a ZIP from the repository page (the green **Code → Download ZIP** button), then extract it and open the extracted folder.

## Install dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Using npm:

```bash
npm install
```

## Run in development

Starts the Vite dev server with hot reload.

```bash
pnpm dev
# or
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:3000).

## Build for production

```bash
pnpm build
# or
npm run build
```

## Preview the production build

```bash
pnpm preview
# or
npm run preview
```

## Deploy to Vercel

This project is configured for the Nitro `vercel` preset, so you can deploy it as a full-stack app on Vercel.

```bash
npx vercel login
npx vercel
```

For the first deployment, keep the defaults when Vercel asks for the framework and build settings. After that, future pushes to the connected branch will deploy automatically if you connect the Git repository in Vercel.

## Other scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm lint`       | Run ESLint across the project        |
| `pnpm format`     | Format files with Prettier           |
| `pnpm build:dev`  | Build using the development mode     |
