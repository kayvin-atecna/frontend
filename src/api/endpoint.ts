/**
 * Fonctions de haut niveau pour appeler les endpoints du backend FastAPI.
 * Chaque fonction correspond à une route (API REST).
 */

import { api } from "@/api/client";
import type { HealthResponse, Photo } from "@/api/types";

// Health check → GET /api/test
export const getHealth = () => api.http<HealthResponse>("/api/test");

// Liste des photos → GET /photos
export const listPhotos = () => api.http<Photo[]>("/photos/");

