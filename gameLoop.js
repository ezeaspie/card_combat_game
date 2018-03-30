const gameLoop = (config) => {
  let player1 = playerFactory("Player 1");
  let player2 = playerFactory("Player 2");
  let log = consoleFactory();

  if (config.filter == "none") {
    let databaseClone = cardDatabase;
    for (var i = 0; i < 10; i++) {
      let random = Math.floor((Math.random() * databaseClone.length));
      player1.creatureDeck.push(databaseClone[random]);
      databaseClone.splice(random, 1);
    }

    for (var i = 0; i < 10; i++) {
      let random = Math.floor((Math.random() * databaseClone.length));
      player2.creatureDeck.push(databaseClone[random]);
      databaseClone.splice(random, 1);
    }

    for (var i = 0; i < 4; i++) {
      player1.drawCard(0);
    }

    for (var i = 0; i < 4; i++) {
      player2.drawCard(0);
    }
  }
  //Show hand and select a current active card for first move.
  //Situation == "0" for running function at the start of the game.
  //Situation == "1" for handling a card's death in battle.
  const generateSelectActiveCardHTML = (player, situation) => {
    let html = "<p>Select a card</p><div class='selection'>";
    for (var i = 0; i < player.creatureBench.length; i++) {
      if (player.creatureBench[i] != undefined) {
        html += player.creatureBench[i].generateHTML(`data-id=${i}`);
      }
    }
    html += "</div>";
    document.querySelector("#game").innerHTML = html;

    let selections = document.querySelectorAll(".card");

    if (situation == 0) {
      if (player == player2) {
        for (var i = 0; i < selections.length; i++) {
          selections[i].addEventListener("click", function() {
            player.currentCard = player.creatureBench[this.dataset.id];
            player.creatureBench.splice(this.dataset.id, 1);
            player.drawCard(0);
            console.log(player);
            currentTurn(player1,player2);
          });
        }
      }
      else {
        for (var i = 0; i < selections.length; i++) {
          selections[i].addEventListener("click", function() {
            player.currentCard = player.creatureBench[this.dataset.id];
            player.creatureBench.splice(this.dataset.id, 1);
            player.drawCard(0);
            console.log(player);
            generateSelectActiveCardHTML(player2);
          });
        }
      }
    }
    else {
      for (var i = 0; i < selections.length; i++) {
        selections[i].addEventListener("click", function() {
          player.currentCard = player.creatureBench[this.dataset.id];
          player.creatureBench.splice(this.dataset.id, 1);
          player.drawCard(0);
          console.log(player);
          if (player==player1) {
            currentTurn(player1,player2);
          }
          else {
            currentTurn(player2,player1);
          }
        });
      }
    }
  }

  generateSelectActiveCardHTML(player1,0);


  player1.currentCard = player1.creatureDeck[0];
  player2.currentCard = player2.creatureDeck[0];

  const currentTurn = (currentPlayer,opponent) => {
    currentPlayer.generateView(opponent.currentCard,currentPlayer.currentCard);
    log.generateConsoleHTML();
    let moves = document.querySelectorAll(".mySide .active .move");
    for (var i = 0; i < moves.length; i++) {
      moves[i].addEventListener("click", function() {

        console.log(this.dataset.cardid);
        console.log(this.dataset.moveid);

        let cardId = this.dataset.cardid;
        let moveId = this.dataset.moveid;
        let selectedMove = currentPlayer.currentCard.moves[moveId];

        if (!opponent.currentCard.takeDamage(selectedMove.damage, selectedMove.accuracy)) {
          log.logMiss(currentPlayer.currentCard);
          console.log("miss!");
        }
        else {
          log.logHit(currentPlayer.currentCard,opponent.currentCard,selectedMove.damage, currentPlayer.currentCard.moves[moveId].name);
        }

        if(opponent.currentCard.checkForDeath()){
          log.logDeath(opponent.currentCard);
          opponent.currentCard = undefined;
          if(opponent.isGameOver()){
            console.log("What an L!");
            document.querySelector('#game').innerHTML = `${currentPlayer.name} is the winner!`;
            setTimeout(() => {
              location.reload();
            },2000);
          }
          else {
            generateSelectActiveCardHTML(opponent);
          }
        }
        else {
          console.log(opponent.currentCard.health);
          console.log(opponent.currentCard);
          currentTurn(opponent,currentPlayer);
        }
      });
    }
  }

  //currentTurn(player1,player2);

}
