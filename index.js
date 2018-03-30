
const renderStartMenu = () => {
  const menuHtml = `
    <h1>Card Fight</h1>
    <div class="menuOption" id="start">Start Game</div>
    <div class="menuOption" id="instructions">Instructions</div>
    <div class="menuOption" id="cardView">All Cards</div>
    `
    document.querySelector("#game").innerHTML = menuHtml;

  const optionsMenu = `
    <button id="back">Back</button>
    <p>Select the type of cards you want to play with.</p>
    <div class="display">
      <button class="allCards bronze">Bronze</button>
      <button class="allCards silver">Silver</button>
      <button class="allCards gold">Gold</button>
      <button class="allCards legendary">Legendary</button>
      <button class="allCards mega">All</button>
    </div>
  `

  document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#game").innerHTML = optionsMenu;
    document.querySelector("#back").addEventListener("click", renderStartMenu);
    let options = document.querySelectorAll(".allCards");
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener("click", () => {
        let currentGame = gameLoop({filter:"none"});
      });
    }
  });

  const showCards = () => {
    let html = `<button id="back">Back</button><div class='display'>`;
    for (var i = 0; i < cardDatabase.length; i++) {
      html += cardDatabase[i].generateHTML();
    }
    html += `</div>`
    document.querySelector("#game").innerHTML = html;
    document.querySelector("#back").addEventListener("click", renderStartMenu);
  }
  document.querySelector("#cardView").addEventListener("click", showCards);
}

renderStartMenu();

//document.querySelector("#instructions").addEventListener("click", showInstructions);
