# 🚗 Vroum Démo

Simulateur de VTC **fictif** : une application interactive qui joue de fausses courses.
Nom, interface, passagers, chauffeurs, lieux et prix sont imaginaires. Elle n'est liée à aucun service existant, ne réserve aucune vraie course et ne gère aucun paiement. Un bandeau « DÉMO » reste visible en permanence.

## Ce qu'elle fait

**Mode Chauffeur**
- Se connecter / se déconnecter, recherche de courses avec radar animé
- Demandes de course fictives (passager, note, trajet, distance, durée, gain) avec compte à rebours de 15 s : accepter ou refuser
- Course complète : trajet vers le passager, prise en charge, trajet animé sur la carte avec gain en direct, fin de course, pourboire aléatoire, note du passager
- Gains du jour et nombre de courses

**Mode Passager**
- Choix du départ et de la destination, trois catégories (Éco, Confort, Van) avec prix et délai estimés
- Recherche d'un chauffeur, arrivée du véhicule, trajet animé, pourboire et note

**Commun** : vitesse de simulation 1× / 2× / 4×, historique et totaux, sons et vibrations (désactivables), fonctionne hors-ligne, installable sur l'écran d'accueil de l'iPhone ou d'Android.

## Utilisation

Ouvrir `index.html` dans un navigateur, ou installer la version publiée (Safari → Partager → « Sur l'écran d'accueil »).

## Publication

Le workflow `.github/workflows/pages.yml` déploie le site sur GitHub Pages à chaque push sur `main` (Settings → Pages → Source : GitHub Actions).
