// OBJECTIVES

// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// Define default game mode.
var gameMode = "start";

// Store player's diceroll and number formed.
var diceRollP1 = [];
var diceRollP2 = [];

var createdNumberP1 = "";
var createdNumberP2 = "";

var createdNumberP1Log = [];
var createdNumberP2Log = [];

// Track player's win-lose record
var player1wins = 0;
var player2wins = 0;
var playertie = 0;

// Adds all number in 'createdNumberP1Log' array for Player 1

// Adds all number in 'createdNumberP2Log' array for Player 2
// var totalScoreP2 = function (createdNumberP2Log) {
//   var reducer = function () {
//     accumulator, currentValue;
//     return accumulator + currentValue;
//   };
//   return createdNumberP1Log.reduce(reducer());
// };

// Generate random dice roll between 1 to  6.
var diceRoll = function () {
  var randomDiceRoll = Math.ceil(Math.random() * 6);
  return randomDiceRoll;
};

// Generate 2 dice rolls when Player 1 clicks submit, then switches to number select mode for dice 1.
var player1Turn = function () {
  var firstDiceP1 = diceRoll();
  var secondDiceP1 = diceRoll();

  console.log(firstDiceP1, secondDiceP1);

  diceRollP1.push(firstDiceP1, secondDiceP1);
  console.log(diceRollP1);

  gameMode = "selectDiceOrder";
  console.log(gameMode);
};

// Generate 2 dice roll when Player 2 clicks submit, then switches to number select mode for dice 2.
var player2Turn = function () {
  var firstDiceP2 = diceRoll();
  var secondDiceP2 = diceRoll();

  console.log(firstDiceP2, secondDiceP2);

  diceRollP2.push(firstDiceP2, secondDiceP2);
  console.log(diceRollP2);

  gameMode = "selectDiceOrder2";
  console.log(gameMode);
};

// Restart the game cycle, saves refreshes player's created numbers in the round.
var resetgame = function () {
  gameMode = "player1";

  createdNumberP1Log.push(createdNumberP1);
  createdNumberP2Log.push(createdNumberP2);

  console.log(createdNumberP1Log);
  console.log(createdNumberP2Log);

  diceRollP1.pop();
  diceRollP1.pop();
  diceRollP2.pop();
  diceRollP2.pop();

  console.log(diceRollP1);
  console.log(diceRollP2);

  console.log(createdNumberP1);
  console.log(createdNumberP2);
};

var main = function (input) {
  // Starting Game Mode
  if (gameMode == "start") {
    myOutputValue =
      "You are now playing [Beat It]. <br><br>Click on submit to roll dice!";

    gameMode = "player1";

    return myOutputValue;
  }
  // Player 1 Game Mode
  if (gameMode == "player1") {
    player1Turn();

    myOutputValue =
      "Welcome Player 1, <br><br>" +
      "[Dice 1] = " +
      diceRollP1[0] +
      "<br>[Dice 2] = " +
      diceRollP1[1] +
      "<br><br>In the field above:<br>Enter 1 to use " +
      diceRollP1[0] +
      " as your first number.  <br>Enter 2 to use " +
      diceRollP1[1] +
      " as your first number.";

    return myOutputValue;
  }
  // Player 1 Dice Placement Game Mode
  if (gameMode == "selectDiceOrder") {
    if (input == "1") {
      myOutputValue =
        "[Player 1] <br><br> You have selected Dice " +
        input +
        " to be your first number. <br><br> Your combined number is " +
        diceRollP1[0] +
        diceRollP1[1] +
        "." +
        "<br><br> ..........................................................................<br><br>It is now Player 2's turn! <br><br> Please click on submit to roll dice.<br><br> ..........................................................................";

      createdNumberP1 = diceRollP1[0] + "" + diceRollP1[1];
      console.log(createdNumberP1);

      gameMode = "player2";

      return myOutputValue;
    }

    if (input == "2") {
      myOutputValue =
        "[Player 1] <br><br> You have selected Dice " +
        input +
        " to be your first number. <br><br> Your combined number is " +
        diceRollP1[1] +
        diceRollP1[0] +
        "." +
        "<br><br> ..........................................................................<br><br>It is now Player 2's turn! <br><br> Please click on submit to roll dice.<br><br> ..........................................................................";

      createdNumberP1 = diceRollP1[1] + "" + diceRollP1[0];
      console.log(createdNumberP1);

      gameMode = "player2";

      return myOutputValue;
    }
  }
  // Player 2 Game Mode
  if (gameMode == "player2") {
    player2Turn();

    myOutputValue =
      "Welcome Player 2, <br><br>" +
      "[Dice 1] = " +
      diceRollP2[0] +
      "<br>[Dice 2] = " +
      diceRollP2[1] +
      "<br><br>In the field above:<br>Enter 1 to use " +
      diceRollP2[0] +
      " as your first number.  <br>Enter 2 to use " +
      diceRollP2[1] +
      " as your first number.";

    return myOutputValue;
  }
  // Player 2 Dice Placement Game Mode
  if (gameMode == "selectDiceOrder2") {
    if (input == "1") {
      myOutputValue =
        "[Player 2] <br><br> You have selected Dice " +
        input +
        " to be your first number. <br><br> Your combined number is " +
        diceRollP2[0] +
        diceRollP2[1] +
        "." +
        "<br><br> ..........................................................................<br><br> Please click on submit to view results.<br><br>..........................................................................";

      createdNumberP2 = diceRollP2[0] + "" + diceRollP2[1];
      console.log(createdNumberP2);

      gameMode = "result";

      return myOutputValue;
    }

    if (input == "2") {
      myOutputValue =
        "[Player 2] <br><br> You have selected Dice " +
        input +
        " to be your first number. <br><br> Your combined number is " +
        diceRollP2[1] +
        diceRollP2[0] +
        "." +
        "<br><br> ..........................................................................<br><br> Please click on submit to view results.<br><br>..........................................................................";

      createdNumberP2 = diceRollP2[1] + "" + diceRollP2[0];
      console.log(createdNumberP2);

      gameMode = "result";

      return myOutputValue;
    }
  }
  // Determine Results Mode
  if (gameMode == "result") {
    if (createdNumberP1 < createdNumberP2) {
      player2wins = player2wins + 1;

      myOutputValue =
        "Player 1 produced the number " +
        createdNumberP1 +
        "." +
        "<br><br> Player 2 produced the number " +
        createdNumberP2 +
        "." +
        "<br><br><br>[Results] Congratulations, Player 2 Won!<br>" +
        "<br><br>" +
        "[Player 1] [" +
        player1wins +
        " Wins]" +
        "<br>Previous Rolls: " +
        createdNumberP1Log +
        "<br><br>[Player 2] [" +
        player2wins +
        " Wins]" +
        "<br>Previous Rolls:" +
        createdNumberP2Log +
        "<br><br><br> Click on submit to play again.";

      resetgame();
    }

    if (createdNumberP1 > createdNumberP2) {
      player1wins = player1wins + 1;

      myOutputValue =
        "Player 1 produced the number " +
        createdNumberP1 +
        "." +
        "<br><br> Player 2 produced the number " +
        createdNumberP2 +
        "." +
        "<br><br><br>[Results] Congratulations, Player 1 Won!<br>" +
        "<br><br>" +
        "[Player 1] [" +
        player1wins +
        " Wins]" +
        "<br>Previous Rolls: " +
        createdNumberP1Log +
        "<br><br>[Player 2] [" +
        player2wins +
        " Wins]" +
        "<br>Previous Rolls:" +
        createdNumberP2Log +
        "<br><br><br> Click on submit to play again.";

      resetgame();
    }

    if (createdNumberP1 == createdNumberP2) {
      playertie = playertie + 1;

      myOutputValue =
        "Player 1 produced the number " +
        createdNumberP1 +
        "." +
        "<br><br> Player 2 produced the number " +
        createdNumberP2 +
        "." +
        "<br><br><br> [Results] It's a Draw!<br>" +
        "<br><br>" +
        "[Player 1] [" +
        player1wins +
        " Wins]" +
        "<br>Previous Rolls: " +
        createdNumberP1Log +
        "<br><br>[Player 2] [" +
        player2wins +
        " Wins]" +
        "<br>Previous Rolls:" +
        createdNumberP2Log +
        "<br><br><br> Click on submit to play again.";

      resetgame();
    }
  }
  return myOutputValue;
};
