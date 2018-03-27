const menuHtml = `
  <h1>Card Fight</h1>
  <div class="menuOption" id="start">Start Game</div>
  <div class="menuOption" id="instructions">Instructions</div>
  <div class="menuOption" id="cardView">All Cards</div>
  `
  document.querySelector("#game").innerHTML = menuHtml;

const optionsMenu = `
  <button class="allCards">Bronze</button>
  <button class="allCards">Silver</button>
  <button class="allCards">Gold</button>
  <button class="allCards">Legendary</button>
  <button class="allCards">All</button>
`

document.querySelector("#start").addEventListener("click", () => {
  document.querySelector("#game").innerHTML = optionsMenu;
  let options = document.querySelectorAll(".allCards");
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
      console.log("caroline");
      gameLoop({filter:"none"});
    });
  }
});
/*
document.querySelector("#instructions").addEventListener("click", showInstructions);
document.querySelector("#cardView").addEventListener("click", showCards);*/
