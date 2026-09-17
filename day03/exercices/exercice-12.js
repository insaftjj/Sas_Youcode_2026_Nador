/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE CALLBACK BASIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction executerOperation(a, b, operation). operation sera une fonction 
 * passée en argument. Appelez : executerOperation(5, 3, multiplier)
 *  (en utilisant la fonction multiplier créée plus tôt).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day03/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
// Fonction pour multiplier deux nombres

function executerOperation(a, b, operation) {

    if (operation = "multiplicateur") {
        return a*b
    } 
    else if (operation="addition ")
        return a+b
    else if  (operateur="division")
        return a / b
    else (operateur="soustraction")
        return a-b
}

console.log(executerOperation(5, 3,"multiplier"));