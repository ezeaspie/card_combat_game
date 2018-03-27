const cardFactory = (config) => {
  let name = config.name;
  let image = config.image;
  let description = config.description;
  let moves = config.moves;
  let health = config.health;
  let maxHealth = config.health;
  let type = config.type;
  let stars = config.stars;

  const generateHTML = () =>{
    let movesHTML = "";
    for (var i = 0; i < moves.length; i++) {
      movesHTML += `
      <div class="move" data-damage=${moves[i].damage} data-accuracy=${moves[i].accuracy} data-cost=${moves[i].cost}>
        <div class="moveTop">
          <div class="moveLeft">
            <span class="moveCost">${moves[i].cost}</span><span class="moveName">${moves[i].name}</span>
          </div>
          <div class="moveRight">
            <span class="moveDamage">${moves[i].damage}</span>
          </div>
        </div>
        <p class="moveDesc">${moves[i].description}</p>
      </div>
      `
    }

    let html = `
      <div class="card ${type}">

        <div class="topbar">
          <span class="name">${name}</span>
          <span class="health">HP : ${health}/${maxHealth}</span>
        </div>

        <img src="${image}">

        <div class="main">
        ${movesHTML}
        <div class="cardFooter">
          ${stars}
        </div>
        </div>
      </div>

      `
      console.log(`generated html is ${html}`);
      return html;
  }


  /*config = {
    name: name,
    image: imageURL,
    type:
    health:
    stars:
    moves: [{
      name:
      description:
      cost:
      damage:
      Accuracy:
      selfEffect: attackdrop,attackboost,attackdrop,etc.
      opponentEffect: ////poison,toxic,burn, attackdrop, etc.
      catergories: ["orangehead","bennyClan","youtuber","cira"]; //Used for abilities and combos.
      ability: {
          name:
          description:
          function:
        }
    }]
  }*/

  return {config, generateHTML ,health,maxHealth, name}
}
