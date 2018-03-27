const gameLoop = (config) => {
  let player1 = playerFactory("Player 1");
  let player2 = playerFactory("Player 2");

  if (config.filter == "none") {
    let databaseClone = cardDatabase;
    for (var i = 0; i < 10; i++) {
      let random = Math.floor((Math.random() * databaseClone.length));
      player1.creatureDeck.push(databaseClone[random]);
      databaseClone.splice(random, 1);
    }
    console.log(player1.creatureDeck);

    for (var i = 0; i < 10; i++) {
      let random = Math.floor((Math.random() * databaseClone.length));
      player2.creatureDeck.push(databaseClone[random]);
      databaseClone.splice(random, 1);
    }
    console.log(player2.creatureDeck);

    for (var i = 1; i < 5; i++) {
      player1.creatureBench.push(player1.creatureDeck[i]);
    }
    console.log(player1.creatureBench);

  }

  player1.currentCard = player1.creatureDeck[0];
  player2.currentCard = player2.creatureDeck[0]

  const currentTurn = (currentPlayer) => {
    currentPlayer.generateView(player2.currentCard,player1.currentCard);
    let moves = document.querySelectorAll(".mySide .active .move");
    for (var i = 0; i < moves.length; i++) {
      moves[i].addEventListener("click", function() {
        console.log(this.dataset.damage);
        player2.currentCard.health -= this.dataset.damage;
        if (player2.currentCard.health < 0) {
          alert(`${player2.currentCard.name} died!`)
        }
        document.querySelector(".opponentSide .active .card .health").innerHTML = `HP : ${player2.currentCard.health}/${player2.currentCard.maxHealth}`
        console.log(player2.currentCard.health);
      });
    }
  }

  currentTurn(player1);

}
