# DOCUMENTATION

## How it Works

Play a combat card game, where players take turns using their cards to try to defeat the opponents card. Each card has their own moves (Abilities and other features coming soon!) that cause damage to the other.

When a card reaches 0 health, they are eliminated from the game and the next player must pick a card from their hand to continue the battle.

When a player is completely out of combat cards - The game is over!

## Gameplay RoadMap

1. ~~Add Accuracy. Some moves have 100% accuracy, some have 50%, etc.~~ (3/29/2018)
2. Add Special Cards. Stadium, Support, Spell Cards on top of the creature/combat cards.
3. Implement Star System, allowing for high powering moves to be used in moderation.
4. Add ability to pass.
5. Add abilities and card synergies.
6. ~~Add Documentation for adding cards to database.~~ (3/28/2018)
7. Add status effects to moves. (poison, paralysis, frozen, etc.)
8. Keep track of status boosts / reductions on the bottom of the card. (attack+, attack++,defense-,etc.)
9. ~~Add a console to keep track of recent moves and damage and effects/etc.~~ (3/29/2018)
10. Add ability to swap out cards for cards on bench.
11. Add MEGA EVOLUTIONS.

## JavaScript/Engine RoadMap

0. ~~Restructure event code to be a method of the card or player.~~ (3/28/2018)
1. ~~Create the turn system. When one person clicks an attack, the next person goes.~~ (3/28/2018)
2. ~~On a card death, next player should be prompted to pick a new active card.~~ - (3/28/2018)
3. ~~On a new card draw, another card should be pulled form the player's DECK to fill the empty bench if possible.~~ - (3/28/2018)
4. ~~Consider restructuring the way data on cards is tracked. Right now the data is tracked with HTML data-attributes. Consider using an id to reference an object instead of storing the data on attributes.~~ - (3/29/2018) [Added an ID attribute for cards and moves to identify and use object properties.]
5. ~~Update CSS and handle image insertion.~~ (3/30/2018)
6. ~~Add functionality to other buttons in start menu.~~ (3/30/2018)
7. ~~Hide bench cards by default, show them on hover.~~ (3/30/2018)
8. Add a screen that allows time to switch between players when selecting a card.

## Adding Cards

To add into the game, you need to go through a two step process of:
1. creating an object with all the custom details for the new card, and then
2. feeding that object into a factory to make it usable in the game.

The configuration object has 2 main parts, the info for the card itself, and the info for the card's moves.

#### cardDatabase.js

The cardDatabase.js file is where you want to add your code.

Open the file and scroll to the bottom of the document. This is where you should add your code.

#### Declaring a variable for your card object.

Declare a variable for your object like so :
```javascript
let CARD_ID = {};
```
CARD_ID can be any name you like, just make sure it's unique and hasn't been used in the database before. (You can use ctrl+f to see if the variable name has been used.)

Make sure you add the semi-colon at the end of the line.

#### Putting Card Info into the Configuration Object.
Now we have to place our key:value pairs into the object.

Please see the example object below.

The structure looks like this:

```javascript
let harley = {
  series: "base", //Unless otherwise specified, use "base" as the value.
  id: 71, //Look at the id of the card above your new card. Add one to that number. This is the card id.
  name:"Harley", //This is the name that will appear on the card in-game.
  image: "./images/harley.jpg", //This can be a link to an image from the internet, or you can upload your own image to the image folder and link to that. More on images below.
  type: "bronze", //Choose from bronze, silver, gold, legendary. Make sure the names are LOWERCASE.
  health: 60, //This is the max health for the card. DO NOT add "" around the number.
  stars:4, //The max number of stars a card can use by default. Number 1-5 NO QUOTES.
  moves: [],
}
```

That's the basic structure of the object. A few things to remember:

1. At the end of every key:value pair remember to add a comma.
2. id, health, and stars MUST be numbers. DO NOT ADD QUOTATION MARKS AROUND THEM.
3. Add quotations around every other value.

#### Adding Moves to a Card

Moves are declared in objects within an array. Start with:
```javascript
 moves: [],
```
From there, add in an object literal ({ }) like this:
  ```javascript
  moves: [{}]
  ```
Add in more objects if you plan to have more than one move.
  ```javascript
  moves: [{},{}]
  ```
Then, inside an object, start to add in the details of the move.
  ```javascript
  moves: [{
    name: "Blah",
    description: "Blah Blah",
    cost: 5,
    damage: 43434,
    accuracy: 20,
    }]
  ```
To add more moves, open another object and follow the same steps.
  ```javascript
  moves: [{
    name: "Blah",
    description: "Blah Blah",
    cost: 5,
    damage: 43434,
    accuracy: 20,
    },
    {
    name:"Another move",
    description: "this does something.",
    cost: 1,
    damage:20,
    accuracy:30,  
    }]
  ```

REMEMBER TO ADD COMMAS after each KEY : VALUE pair and after each { } object.

#### Pushing the object into the database

Now that you have the object ready to go, copy this code:

```javascript
cardDatabase.push(cardFactory(NAME));
```
Paste it directly under your card object.
(below the last "}". See the other cards in the database for an example.)

Replace NAME with the name of your card VARIABLE (Not your card's "name" value.)

```javascript
let rufusdweeb = { // <-- THIS IS THE VARIABLE NAME. USE THIS.
  ...
  name: "Jace Norman", // <-- DO NOT USE THIS NAME.
  ...
  }
```
Save the file and commit your changes. If everything worked, your card should be in the game!

#### More on images

You can choose to use an image link. (Image from google or another site.)
```
 image: "https://tse1.mm.bing.net/th?id=OIP.JrNJ010RD4SFA_2OuHPUbQHaFw&w=229&h=178&c=7&o=5&pid=1.7"
```

If your image isn't on the internet, you can add your images to the 'images' folder and then use a relative link like this:

```
  image: "./images/FILENAME"
```

If adding an image to the folder, make sure you use a simple name with NO SPACES.
