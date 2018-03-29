const consoleFactory = () => {
  let messageArray = [];

  const generateConsoleHTML = () => {
    let messagesHtml = "";
    for (var i = 0; i < 4; i++) {
      if (messageArray[i] != undefined){
        messagesHtml += messageArray[i] ;
      }
    }

    let html = `
      <div class="main">
        <p>CONSOLE</p>
      </div>
      <ul id="messages">
        ${messagesHtml}
      </ul>
    `
    document.querySelector(".console").innerHTML = html;
  }


  const logDeath = (card) => {
    let messageHtml = `
      <li class="message death">${card.name} died!</li>
    `
    messageArray.unshift(messageHtml);
    console.log(messageArray);
    generateConsoleHTML();
  }
  const logHit = (attackingCard,defendingCard,damage,move) => {
    let messageHtml = `
      <li class="message hit">${attackingCard.name} used ${move} on ${defendingCard.name}. ${damage} damage.</li>
    `
    messageArray.unshift(messageHtml);
    console.log(messageArray);
    generateConsoleHTML();
  }
  const logMiss = (attackingCard) => {
    let messageHtml = `
      <li class="message miss">${attackingCard.name} missed!</li>
    `
    messageArray.unshift(messageHtml);
    console.log(messageArray);
    generateConsoleHTML();
  }

  return {logMiss,logHit,logDeath,generateConsoleHTML}
}
