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

**Commun** : vitesse de simulation 1× / 2× / 4×, historique et totaux, sons de notification synthétisés (carillons) et vibrations (désactivables), fonctionne hors-ligne (hors fond de plan), installable sur l'écran d'accueil de l'iPhone ou d'Android.

## Position réelle (facultative)

- Au passage en ligne (chauffeur) ou via « Me localiser » (passager), l'app demande ta position. Elle centre la carte sur toi, suit tes déplacements en direct pendant l'attente de client, et génère les clients et destinations fictifs **autour de toi** (n'importe où où OSRM a des routes).
- La position n'est ni enregistrée ni envoyée à un serveur de l'app. Seuls les points des trajets (proches de toi) partent vers le service d'itinéraires public OSRM, comme pour tout calcul de route. Les noms de rues des trajets terminés restent dans l'historique de ton appareil (bouton d'effacement disponible).
- Si tu refuses ou désactives (« Ma position réelle »), l'app utilise les lieux de Paris.

## Carte et itinéraires réels

- Fond de plan de Paris (OpenStreetMap, rendu en noir et blanc, clair ou sombre selon ton téléphone) affiché avec [Leaflet](https://leafletjs.com) (hébergé dans `vendor/leaflet`).
- Lieux réels (gares, monuments, aéroport d'Orly) et **itinéraires routiers réels** calculés par le service public [OSRM](https://project-osrm.org) : distances, durées et prix des courses en découlent, la voiture suit la vraie route.
- Sans internet, les trajets sont estimés à vol d'oiseau et le fond de plan peut manquer ; l'application continue de fonctionner.
- Police : [Inter](https://rsms.me/inter/) (licence SIL OFL, hébergée dans `fonts/`).
- Données cartographiques © contributeurs OpenStreetMap. Les services de carte et d'itinéraire gratuits sont prévus pour un usage léger : ne pas s'en servir pour un service réel.

## Utilisation

Ouvrir `index.html` dans un navigateur, ou installer la version publiée (Safari → Partager → « Sur l'écran d'accueil »).

## Publication

Le workflow `.github/workflows/pages.yml` déploie le site sur GitHub Pages à chaque push sur `main` (Settings → Pages → Source : GitHub Actions).
