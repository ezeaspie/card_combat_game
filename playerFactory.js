const playerFactory = (name) => {
  let creatureDeck = [];
  let creatureBench = [];
  let specialDeck = [];
  let specialBench = [];
  let view = "";
  let currentCard = undefined;

  const isGameOver = () => {
    if (creatureDeck[0] == undefined && creatureBench[0] == undefined && currentCard == undefined) {
      alert("GAME OVER! ALL YOUR CUZZES DIED.");
      return true;
    }
    else {return false}
  }
  const generateView = (currentOpponent, currentCard) => {
    let benchHTML = "";
    for (var i = 0; i < creatureBench.length; i++) {
      if (creatureBench[i] != undefined) {
        benchHTML += creatureBench[i].generateHTML();
      }
    }

    let view = `
    <div class="opponentSide">
      <div class="opponentBench">
        <div class="dummyCard enemy">
        </div>
        <div class="dummyCard enemy">
        </div>
        <div class="dummyCard enemy">
        </div>
        <div class="dummyCard enemy">
        </div>
      </div>
      <div class="active">
        ${currentOpponent.generateHTML()}
      </div>
    </div>
    <div class="mySide">
      <div class="active">
        ${currentCard.generateHTML()}
      </div>
      <div class="console">
      </div>
      <button class="show">Click to show bench</button>
      <div class="myBench">
        ${benchHTML}
      </div>
    </div>
    `
    document.querySelector("#game").innerHTML = view;

    let cards = document.querySelectorAll(".myBench .card");

    document.querySelector(".show").addEventListener("click", function(){
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "flex";
      }
    });
  }

  const drawCard = (type) => {
    if (type==0) {
      creatureBench.push(creatureDeck[0]);
      creatureDeck.shift();
    }
    else {
      specialBench.push(specialDeck[0]);
      specialDeck.shift();
    }
  }

  const playCard = (type, selected) => {
    if (type==0) {
      currentCard = creatureBench[selected];
      creatureBench.splice(selected, 1);
      drawCard(0);
      return currentCard;
    }
    else {
      currentCard = specialBench[selected];
      creatureBench.splice(selected, 1);
      drawCard(1);
      return currentCard;
    }
  }
  return {name, isGameOver, creatureDeck,creatureBench,drawCard, playCard, generateView,currentCard}
}
