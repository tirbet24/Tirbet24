// Modifiez ces listes pour changer les cartes affichées sur la page.
const events = [
  { league: "LIGUE 1 · DÉMO", time: "Aujourd’hui · 20:00", home: "Équipe A", away: "Équipe B" },
  { league: "LIGUE DES CHAMPIONS · DÉMO", time: "Demain · 18:45", home: "Club Nord", away: "Club Sud" },
  { league: "MATCH AMICAL · DÉMO", time: "Demain · 21:00", home: "Team Rouge", away: "Team Bleu" }
];
const games = [
  { icon: "🎯", title: "Défi de précision", desc: "Carte de jeu de démonstration, à remplacer par votre jeu autorisé." },
  { icon: "🧠", title: "Quiz sportif", desc: "Ajoutez vos questions et réponses dans ce projet." },
  { icon: "🎮", title: "Mini-jeu", desc: "Emplacement réservé à un jeu HTML5 que vous possédez." }
];
const eventsContainer = document.querySelector("#events");
const gamesContainer = document.querySelector("#games");
eventsContainer.innerHTML = events.map(e => `
  <article class="event-card">
    <div class="event-meta">${e.league}</div>
    <div class="event-meta">${e.time}</div>
    <div class="teams"><span>${e.home}</span><span class="versus">VS</span><span>${e.away}</span></div>
    <button class="demo-action">Voir le match (démo)</button>
  </article>`).join("");
gamesContainer.innerHTML = games.map(g => `
  <article class="game-card">
    <div class="game-icon">${g.icon}</div><h3>${g.title}</h3><p>${g.desc}</p>
    <button class="demo-action">Ouvrir la démo</button>
  </article>`).join("");
const notice = document.querySelector("#notice");
function showNotice(title, message) {
  document.querySelector("#noticeTitle").textContent = title;
  document.querySelector("#noticeText").textContent = message;
  notice.showModal();
}
document.querySelector("#loginBtn").addEventListener("click", () => showNotice("Connexion", "Cette maquette ne contient pas de système de comptes. Connectez uniquement un système backend que vous êtes autorisé à exploiter."));
document.querySelector("#registerBtn").addEventListener("click", () => showNotice("Inscription", "Formulaire d’inscription non connecté dans cette maquette."));
document.querySelector("#closeNotice").addEventListener("click", () => notice.close());
document.querySelectorAll(".demo-action").forEach(btn => btn.addEventListener("click", () => showNotice("Mode démonstration", "Cette carte est un exemple modifiable. Aucun pari, dépôt ou paiement réel n’est effectué.")));
