/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function filtrerCandidatsAdmis(candidats) {
  return candidats.filter(candidat => candidat.score >= 10);
}
const listeCandidats = [
  { nom: "Sara", score: 15 },
  { nom: "Youssef", score: 8 },
  { nom: "Amina", score: 12 },
  { nom: "Omar", score: 9 }
];

const admis = filtrerCandidatsAdmis(listeCandidats);

console.log(admis);
