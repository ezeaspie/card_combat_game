let cardDatabase = [];

let julie = {
  series: "base",
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
cardDatabase.push(cardFactory(julie));

let rufusslave = {
  series: "base",
  id: "1",
  name:"Jace Norman",
  image: "https://www.bing.com/th?id=A5ef5d49dbcdc6fa6c0a590f3ff285b90&w=110&h=110&c=12&rs=1&qlt=80&pcl=f9f9f9&cdv=1&pid=16.2",
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
cardDatabase.push(cardFactory(rufusslave));

let obe = {
  series: "base",
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
cardDatabase.push(cardFactory(obe));

let chris = {
  series: "base",
  id: "3",
  name:"Chris",
  image: "https://tse1.mm.bing.net/th?id=OIP.JrNJ010RD4SFA_2OuHPUbQHaFw&w=229&h=178&c=7&o=5&pid=1.7",
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
cardDatabase.push(cardFactory(chris));

let yoli = {
  series: "base",
  id: "4",
  name:"Yoli",
  image: "./images/yoli.jpg",
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
cardDatabase.push(cardFactory(yoli));

let cira = {
  series: "base",
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
cardDatabase.push(cardFactory(cira));

let yasmeen = {
  series: "base",
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
cardDatabase.push(cardFactory(yasmeen));

let cristina = {
  series: "base",
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
cardDatabase.push(cardFactory(cristina));

let jimmy = {
  series: "base",
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
cardDatabase.push(cardFactory(jimmy));

let jakololo = {
  series: "base",
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
cardDatabase.push(cardFactory(jakololo));

let sonia = {
  series: "base",
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
cardDatabase.push(cardFactory(sonia));

let timmy = {
  series: "base",
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
cardDatabase.push(cardFactory(timmy));

let gamesohood = {
  series: "base",
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
cardDatabase.push(cardFactory(gamesohood));

let bb = {
  series: "base",
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
cardDatabase.push(cardFactory(bb));


let maddie = {
  series: "base",
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
cardDatabase.push(cardFactory(maddie));



/* FEED THE CARD OBJECT YOU MADE BELOW THIS LINE */
