let cardDatabase = [];
//["Madeline Harbour","Julian Gaitan","Juliette Sandover","Ada Lima", "Clarissa Harbour", "Damien Schmidt", "Maxine Rubin", "Robert Silva", "Jacques Harbour", "Harry Weathers", "Lorena Rodriguez", "Alfonso Lima", "Estefania Lima", "Austin Harper", "Nancy Petrov", "Caspar Rubin", "Maya Slawson", "Alceste Lucy", "Edward Blake", "Selena Rasoca"];
//cardDatabase.push(cardFactory("Maeve Colbrun", "James Vernon", "Jade Vernon", "David Colbrun", "Irene Lassiter", "Yuri Maximillian", "Randall McCarthy", "Billy Creel", "Alexander Sage", "Alexis Sage", "Alexandra Sage", "Alex Sandro Sage", "Brianne Sharp", "Jimmy Jarvis", "Cynthia Palafox", "Lisandro Maldonado", "Victoria Rubin", "Violet Sandover", "Ashley Carter");

let julie = {
  id: "0",
  name:"Juliette",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "gold",
  health: 250,
  stars:4,
  moves: [{
    name:"Keychain Punch",
    description: "Transform her keys into makeshift brass-knuckles.",
    cost: 2,
    damage: 30,
    accuracy: 100,
  },{
    name:"Close Combat",
    description: "Dish out a beating!",
    cost: 4,
    damage: 90,
    accuracy: 100,
  }],
}

let rufusslave = {
  id: "1",
  name:"Jace Norman",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Nega Funny Jokes",
    description: "Your jokes are so bad they hurt your opponent.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Q and A with Fans",
    description: "50% chance of hitting, 50% chance of Nick cancelling your trash and losing 10 HP.",
    cost: 2,
    damage: 30,
    accuracy: 50,
  }],
}

let obe = {
  id: "2",
  name:"Obe",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 60,
  stars:2,
  moves: [{
    name:"deal",
    description: "deal.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Big Booty with Jean",
    description: "The second best at Big Booty.",
    cost: 2,
    damage: 30,
    accuracy: 100,
  }],
}

let chris = {
  id: "3",
  name:"Chris",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 100,
  stars:1,
  moves: [{
    name:"Push",
    description: "You get juked. Push the opponent because you're jealous.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"OOOH",
    description: "10% chance of scoring on Fran.",
    cost: 2,
    damage: 50,
    accuracy: 10,
  }],
}

let yoli = {
  id: "4",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let cira = {
  id: "5",
  name:"Cira",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 150,
  stars:2,
  moves: [{
    name:"Tamalitos",
    description: "Feed the other dude crust food. 50% chance of poison.",
    cost: 1,
    damage: 10,
    accuracy: 50,
  },{
    name:"Famila peluche",
    description: "Die laughing at this funny show.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let yasmeen = {
  id: "6",
  name:"Yasmeen",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 200,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let cristina = {
  id: "7",
  name:"Cristina",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 62,
  stars:2,
  moves: [{
    name:"Whoop Nery",
    description: "demolish nery. +10 damage to Nery.",
    cost: 1,
    damage: 30,
    accuracy: 100,
  }],
}

let jimmy = {
  id: "8",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let jakololo = {
  id: "9",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}
let sonia = {
  id: "10",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}
let timmy = {
  id: "11",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}
let gamesohood = {
  id: "12",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let bb = {
  id: "13",
  name:"Yoli",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "bronze",
  health: 40,
  stars:2,
  moves: [{
    name:"Be Annoying",
    description: "its a letter from my mom.",
    cost: 1,
    damage: 10,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

let maddie = {
  id: "14",
  name:"Madeline",
  image: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/sign-check-icon.png",
  type: "silver",
  health: 120,
  stars:4,
  moves: [{
    name:"Scramble Swift",
    description: "Attack first.",
    cost: 1,
    damage: 20,
    accuracy: 100,
  },{
    name:"Microwave Capri Sun",
    description: "You electrocute everyone on the field because you're dumb.",
    cost: 2,
    damage: 20,
    accuracy: 100,
  }],
}

cardDatabase.push(cardFactory(julie));
cardDatabase.push(cardFactory(rufusslave));
cardDatabase.push(cardFactory(obe));
cardDatabase.push(cardFactory(yoli));
cardDatabase.push(cardFactory(obe));
cardDatabase.push(cardFactory(gamesohood));
cardDatabase.push(cardFactory(cristina));
cardDatabase.push(cardFactory(jakololo));
cardDatabase.push(cardFactory(sonia));
cardDatabase.push(cardFactory(jimmy));
cardDatabase.push(cardFactory(yasmeen));
cardDatabase.push(cardFactory(cira));
cardDatabase.push(cardFactory(chris));
cardDatabase.push(cardFactory(bb));
cardDatabase.push(cardFactory(maddie));
