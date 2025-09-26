/**
 * Simple HTTP client wrapper autour de fetch().
 * - Préfixe automatiquement les requêtes avec VITE_API_BASE.
 * - Lance une erreur si le backend renvoie un status non-OK.
 * - Retourne du JSON typé (via generic T).
 */

const API_BASE = import.meta.env.VITE_API_BASE || "/";

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE.replace(/\/$/, "")}${path}`;
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }

  return res.json() as Promise<T>;
}

export const api = { http };