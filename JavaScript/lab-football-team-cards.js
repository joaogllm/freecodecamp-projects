const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

const teamName = document.querySelector("#team");
const teamYear = document.querySelector("#year");
const teamCoach = document.querySelector("#head-coach");
const cards = document.querySelector("#player-cards");
const playersFilter = document.querySelector("#players");
teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;
teamCoach.textContent = footballTeam.headCoach;

function generateCards(arr) {
  arr.forEach((player) => {
    const card = `
  <div class="player-card">
    <h2>${player.isCaptain ? "(Captain) " + player.name : player.name}</h2>
    <p>Position: ${player.position}</p>
  </div>
`;
    let cardsDeck = ``;
    cardsDeck += card;
    cards.innerHTML += cardsDeck;
  });
}
generateCards(footballTeam.players);
playersFilter.addEventListener("change", () => {
  const result = footballTeam.players.filter((player) => {
    return (
      playersFilter.value === "all" || player.position === playersFilter.value
    );
  });
  cards.innerHTML = "";
  generateCards(result);
});
