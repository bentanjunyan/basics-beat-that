// OBJECTIVES

// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

var gameMode = "";
var playerNames = [];
var savedDiceRoll1 = [];
var savedDiceRoll2 = [];

var generateRandomDiceNumber = function () {
  return Math.ceil(Math.random() * 6);
};

var gameModeSelection = function () {
  var diceRoll = generateRandomDiceNumber();
  var gameMode = "preGame";
  var counter = 0;

  if (gameMode == "preGame") {
    while (counter < 2) {
      playerNames.push(input);
      counter = counter + 1;
    }
    return (gameMode = "diceGame1");
  }

  if (gameMode == "diceGame1") {
    var diceRoll = generateRandomDiceNumber();
    var counter = 0;

    while (counter < 2) {
      savedDiceRoll1.push(diceRoll);
      counter = counter + 1;
    }
    return (gameMode = "diceGame2");
  }

  if (gameMode == "diceGame2") {
    var diceRoll = generateRandomDiceNumber();
    var counter = 0;

    while (counter < 2) {
      savedDiceRoll2.push(diceRoll);
      counter = counter + 1;
    }
    return (gameMode = "diceGame1");
  }
};

var getHigestDiceNumber1 = function () {
  var higestDiceNumber1 = "";
  if (savedDiceRoll1[0] < savedDiceRoll1[1])
    return (higestDiceNumber1 = "savedDiceRoll1[1]" + "savedDiceRoll1[0]");
  else return (higestDiceNumber1 = "savedDiceRoll1[0]" + "savedDiceRoll1[1]");
};

var getHigestDiceNumber2 = function () {
  var higestDiceNumber2 = "";
  if (savedDiceRoll2[0] < savedDiceRoll2[1])
    return (higestDiceNumber2 = "savedDiceRoll2[1]" + "savedDiceRoll2[0]");
  else return (higestDiceNumber2 = "savedDiceRoll2[0]" + "savedDiceRoll2[1]");
};

var main = function (input) {
  gameModeSelection();
  getHigestDiceNumber1();
  getHigestDiceNumber2();

  if (higestDiceNumber1() < higestDiceNumber2()) return "Player 2 Wins.";
  else return "Player 1 Wins.";
};
