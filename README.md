# Complete signal Frontend
Voici un README dédié au frontend du projet Complete Signal

1) Stack
  - React 18
  - TypeScript 5
  - Vite 5 (bundler/dev server)
  - Node.js 20


2) Prérequis
  - Node.js 20.x et pnpm
  - Backend FastAPI lancé sur http://localhost:8000 en dev (docker-compose up)

3) Installation
  cd frontend
  pnpm install
  pnpm run dev  # http://localhost:5173

4) Environnement variable

  - frontend/.env.development
  VITE_API_BASE=/api

  - frontend/.env.production
  VITE_API_BASE=/api

5) Connexion au backend

5.1 Vite: proxy en dev