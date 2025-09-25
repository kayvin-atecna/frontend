---

# Complete Signal Frontend

Frontend de l’application **Complete Signal** (POC).

---

## 1) Stack

* [React 19](https://react.dev/) – UI moderne, basée sur les hooks et composants fonctionnels
* [TypeScript 5](https://www.typescriptlang.org/) – Typage statique robuste
* [Vite 7](https://vitejs.dev/) – Dev server ultra-rapide et bundler optimisé
* [React Router DOM 7](https://reactrouter.com/) – Bibliothèque de routage  côté client et côté serveur
* [Node.js 22](https://nodejs.org/) – Runtime nécessaire pour lancer le projet
* [pnpm](https://pnpm.io/) – Gestionnaire de paquets

---

## 2) Prérequis

* Node.js **20.x**
* `pnpm` installé globalement

Backend dispo sur : [http://localhost:8000](http://localhost:8000)

---

## 3) Installation & démarrage

```sh
cd frontend
pnpm install
pnpm run dev
```

Application accessible sur : [http://localhost:5173](http://localhost:5173)

---

## 4) Variables d’environnement

Permet de définir la base d’URL des appels API.

### `frontend/.env.development`

```env
VITE_API_BASE=/api
```

### `frontend/.env.production`

```env
VITE_API_BASE=/api
```

---

## 🔗 5) Connexion au backend

**Vite** est configuré pour proxyfier les appels API vers FastAPI et unifie les URLs côté frontend.


Extrait de la config `vite.config.ts` :

```ts
server: {
  port: 5173,
  strictPort: true,
  proxy: {
    "/api": { target: "http://localhost:8000", changeOrigin: true },
    "/photos": { target: "http://localhost:8000", changeOrigin: true },
    "/add-photo": { target: "http://localhost:8000", changeOrigin: true },
    "/upload-image": { target: "http://localhost:8000", changeOrigin: true },
    "/upload-json": { target: "http://localhost:8000", changeOrigin: true },
    "/docs": { target: "http://localhost:8000", changeOrigin: true },
    "/openapi.json": { target: "http://localhost:8000", changeOrigin: true }
  }
}
```

Le proxy redirige les appels du frontend (`/api`, `/photos`…) vers le backend FastAPI (`http://localhost:8000`)

Exemple :
Frontend appelle → `/api/...`
Proxy → `http://localhost:8000/...`

---

## 6) Architecture du projet

```
frontend/
├── src/
│   ├── components/      # Composants UI réutilisables (Button, Header…)
│   ├── pages/           # Pages correspondant aux routes React Router (HomePage, CameraPage…)
│   ├── hooks/           # Hooks personnalisés (ex: useUserMedia)
│   ├── App.tsx          # Définition des routes
│   ├── main.tsx         # Entrée principale (ReactDOM + BrowserRouter)
│   └── index.css        # Styles globaux
├── public/              # Fichiers statiques (favicon, manifest…)
├── .env.development     # Variables d'env en dev
├── .env.production      # Variables d'env en prod
├── vite.config.ts       # Config Vite
└── package.json
```

---

## 7) Workflow actuel

1. **Accueil** → L’utilisateur voit 3 boutons : Voir la carte, Suivre mon parcours, Signaler des déchets sauvages.
2. **Navigation** → Chaque bouton redirige vers la page correspondante (`/map`, `/track`, `/camera`).
3. **Carte** → L’utilisateur clique "Voir la carte" → page avec carte centrée sur sa position + point bleu de localisation.
4. **Signalement (caméra)** → Popup système demande l’accès caméra. Si refus → retour accueil.
5. **Prise de photo** → Si accepté, affichage caméra + boutons "Prendre photo" / "Annuler".

---