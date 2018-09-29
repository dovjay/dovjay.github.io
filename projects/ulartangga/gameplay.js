// make the dice button
var dice = document.getElementById('dice');
var diceButton = document.getElementById('dice-button');

//make roll dice function
function rollTheDice() {
  var go = Math.ceil(Math.random() * 6);
  var youGo = document.createTextNode(`Player ${player} can go for ${go} box`);
  var p = document.getElementById('p-go');
  var instruction = document.getElementById('instruction');
  if (player+1 > maxPlayer) {
    var instructionText = document.createTextNode(`Player 1, Please roll the dice!`);
  } else {
    var instructionText = document.createTextNode(`Player ${player+1}, Please roll the dice!`);
  }
  p.innerHTML = '';
  instruction.innerHTML = '';
  p.appendChild(youGo);
  instruction.appendChild(instructionText);
  dice.appendChild(p);
  playerGo(go);
  positionDisplay();
}

function playerGo(walkFor) {
  var playerPos = playerPosition[player-1].innerHTML;
  var changePos = document.getElementById(`pos${player}`);
  var thePlayer = document.getElementById(`player${player}`);
  if (Number(playerPos) + walkFor <= 100) {
    changePos.innerHTML = Number(playerPos) + walkFor;
  }
  for (let i in boardChilds) {
    if (boardChilds.hasOwnProperty(i)) {
      if (boardChilds[i].firstChild.innerHTML == changePos.innerHTML) {
        boardChilds[i].appendChild(thePlayer);
      }
    }
  }

  // make ladderAndSnake function
  function ladderAndSnake() {
    switch(Number(playerPosition[player-1].innerHTML)) {
      case 4:
        boardChilds['86'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '14';
        break;
      case 9:
        boardChilds['69'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '31';
        break;
      case 17:
        boardChilds['96'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '7';
        break;
      case 20:
        boardChilds['62'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '38';
        break;
      case 28:
        boardChilds['13'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '84';
        break;
      case 40:
        boardChilds['41'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '59';
        break;
      case 51:
        boardChilds['36'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '67';
        break;
      case 54:
        boardChilds['66'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '34';
        break;
      case 62:
        boardChilds['81'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '19';
        break;
      case 63:
        boardChilds['10'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '81';
        break;
      case 64:
        boardChilds['40'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '60';
        break;
      case 71:
        boardChilds['9'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '91';
        break;
      case 87:
        boardChilds['73'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '24';
        break;
      case 93:
        boardChilds['27'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '73';
        break;
      case 95:
        boardChilds['25'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '86';
        break;
      case 99:
        boardChilds['22'].appendChild(thePlayer);
        playerPosition[player-1].innerHTML = '78';
        break;
    }
  }
  ladderAndSnake();
}

// make playerTurn function
var player = 1;
function playerTurn() {
  if (player<maxPlayer) {
    return player + 1;
  } else {
    return 1;
  }
}

// add the function to the dice button
diceButton.addEventListener("click", function() {
  rollTheDice();
  if (playerPosition[player-1].innerHTML == 100) {
    alert(`Player ${player} has won the game!`);
  }
  player = playerTurn();
});