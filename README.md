# DOCUMENTATION

## How it Works

Play a combat card game, where players take turns using their cards to try to defeat the opponents card. Each card has their own moves (Abilities and other features coming soon!) that cause damage to the other.

When a card reaches 0 health, they are eliminated from the game and the next player must pick a card from their hand to continue the battle.

When a player is completely out of combat cards - The game is over!

## Gameplay RoadMap

1. Add Accuracy. Some moves have 100% accuracy, some have 50%, etc.
2. Add Special Cards. Stadium, Support, Spell Cards on top of the creature/combat cards.
3. Implement Star System, allowing for high powering moves to be used in moderation.
4. Add ability to pass.
5. Add abilities and card synergies.
6. Add Documentation for adding cards to database.
7. Add status effects to moves. (poison, paralysis, frozen, etc.)
8. Keep track of status boosts / reductions on the bottom of the card. (attack+, attack++,defense-,etc.)
9. Add a console to keep track of recent moves and damage and effects/etc. (3/29/2018)

## JavaScript/Engine RoadMap

0. Restructure event code to be a method of the card or player. (3/28/2018)
1. Create the turn system. When one person clicks an attack, the next person goes. (3/28/2018)
2. On a card death, next player should be prompted to pick a new active card. - (3/28/2018)
3. On a new card draw, another card should be pulled form the player's DECK to fill the empty bench if possible. - (3/28/2018)
4. Consider restructuring the way data on cards is tracked. Right now the data is tracked with HTML data-attributes. Consider using an id to reference an object instead of storing the data on attributes.
5. Update CSS and handle image insertion.
6. Add functionality to other buttons in start menu.

## Adding Cards

To add into the game, you need to go through a two step process of creating an object with all the custom details for the new card, and then feeding that object into a factory to make it usable in the game.

#### cardDatabase.js and basic structure.

In the cardDatabase.js file, there are three types of variables. One is the variable for the database itself, the other is a series of configuration objects for each card, and towards the bottom are the functions for adding that card into the database.

#### Declaring a variable for your card object.

Declare a variable for your object like so :
```javascript
var CARD_ID = {};
```
CARD_ID can be any name you like, just make sure it's unique and hasn't been used in the database before. (You can use ctrl+f to see if the variable name has been used.)

#### Setting up the configuration object.
```javascript
let CARD_ID = {
  name:"YOUR CARD NAME",
  image: "LINK TO THE IMAGE THE CARD WILL USE", //Make sure the link ends in .png, .jpg, etc.
  type: "bronze", //Choose from bronze, silver, gold, legendary. Make sure the names are LOWERCASE.
  health: 200, //This must be a number. DO NOT add "" around the number.
  stars:4, //This must also be a number. NO QUOTES.
  moves: [{ //Moves are declared in an array of objects. Type moves = []. Then inside the brackets, add your objects like so: [{...stuff},{...stuff},{...stuff}]
    name:"NAME OF MOVE",
    description: "This move does: ...", //Keep the move description short please.
    cost: 2, //Number. Max of 5.
    damage: 30, //Number.
    accuracy: 100, //This must be a number between 0-100.
  },{
    name:"Close Combat",
    description: "Dish out a beating!",
    cost: 4,
    damage: 90,
    accuracy: 100,
  }],
}
```

Moves are declared in objects within an array. Start with:
```
 moves: []
```
From there, add in an object literal ({}) like this:
  ```
  moves: [{}]
  ```
Then start to add in the details of the move.
  ```
  moves: [{
    name: "Blah",
    description: "Blah Blah",
    cost: 5,
    damage: 43434,
    accuracy: 20,
    }]
  ```
To add more moves, add in another object and follow the same steps.
  ```
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

Add commas after each KEY : PROPERTY pair and after each {} object.

#### Pushing the object into the database.

Now that you have the object ready to go, go to the bottom of the document and you will see lots of statements that look like this:

```javascript
cardDatabase.push(cardFactory(NAME));
```

Simply copy one of these lines and replace "NAME" with the name of the variable you declared for your object.

```javascript
cardDatabase.push(cardFactory(CARD_ID));
```
