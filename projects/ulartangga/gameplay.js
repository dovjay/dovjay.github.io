// make the dice button and information for player
var dice = document.getElementById('dice');
var diceButton = document.getElementById('dice-button');

//make roll dice function
function rollTheDice() {
  var go = Math.ceil(Math.random() * 6);

  // make a function to play Dice Roll Video
  function playDiceVideo() {
    document.getElementById("dice-video").style.display = "grid";
    document.getElementById(`player${player}`).style.display = "none";
    document.getElementById(`dice${go}`).style.display = "inline";
    document.getElementById(`dice${go}`).play();
    diceButton.disabled = true;
    setTimeout(hideDiv, 2000);
    function hideDiv() {
      document.getElementById("dice-video").style.display = "none";
      document.getElementById(`player${player}`).style.display = "inline";
      document.getElementById(`dice${go}`).style.display = "none";
      diceButton.disabled = false;
      playerGo(go);
      positionDisplay();
      if (!diceIsSix()) {
        checkWinner();
        if (player + 1 > maxPlayer) {
          var instructionText = document.createTextNode(`Player 1, Please roll the dice!`);
          instruction.innerHTML = '';
          instruction.appendChild(instructionText);
        } else {
          var instructionText = document.createTextNode(`Player ${player + 1}, Please roll the dice!`);
          instruction.innerHTML = '';
          instruction.appendChild(instructionText);
        }
        player = playerTurn();
      } else {
        if (!checkWinner()) {
          alert(`Player ${player} just got six! Roll again!`);
          rollTheDice();
        }
      }
    }
  }
  playDiceVideo();
  var instruction = document.getElementById('instruction');

  function diceIsSix() {
    if (go == 6) {
      return true;
    } else {
      return false;
    }
  }
}

function playerGo(walkFor) {
  var playerPos = playerPosition[player - 1].innerHTML;
  var changePos = playerPosition[player - 1];
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
    switch (Number(playerPosition[player - 1].innerHTML)) {
      case 4:
        boardChilds['86'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '14';
        alert(`Player ${player} going up 10 tiles`);
        break;
      case 9:
        boardChilds['69'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '31';
        alert(`Player ${player} going up 22 tiles`);
        break;
      case 17:
        boardChilds['96'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '7';
        alert(`Player ${player} going down 10 tiles`);
        break;
      case 20:
        boardChilds['62'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '38';
        alert(`Player ${player} going up 18 tiles`);
        break;
      case 28:
        boardChilds['13'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '84';
        alert(`Player ${player} going up 56 tiles`);
        break;
      case 40:
        boardChilds['41'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '59';
        alert(`Player ${player} going up 19 tiles`);
        break;
      case 51:
        boardChilds['36'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '67';
        alert(`Player ${player} going up 16 tiles`);
        break;
      case 54:
        boardChilds['66'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '34';
        alert(`Player ${player} going down 20 tiles`);
        break;
      case 62:
        boardChilds['81'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '19';
        alert(`Player ${player} going down 43 tiles`);
        break;
      case 63:
        boardChilds['10'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '81';
        alert(`Player ${player} going up 18 tiles`);
        break;
      case 64:
        boardChilds['40'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '60';
        alert(`Player ${player} going down 4 tiles`);
        break;
      case 71:
        boardChilds['9'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '91';
        alert(`Player ${player} going up 20 tiles`);
        break;
      case 87:
        boardChilds['73'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '24';
        alert(`Player ${player} going down 63 tiles`);
        break;
      case 93:
        boardChilds['27'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '73';
        alert(`Player ${player} going down 20 tiles`);
        break;
      case 95:
        boardChilds['25'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '86';
        alert(`Player ${player} going down 9 tiles`);
        break;
      case 99:
        boardChilds['22'].appendChild(thePlayer);
        playerPosition[player - 1].innerHTML = '78';
        alert(`Player ${player} going down 21 tiles`);
        break;
    }
  }
  // ladderAndSnake();
}

// make playerTurn function
var player = 1;
function playerTurn() {
  if (player < maxPlayer) {
    return player + 1;
  } else {
    return 1;
  }
}

// check winner function
function checkWinner() {
  if (playerPosition[player - 1].innerHTML == 100) {
    alert(`Player ${player} has won the game!`);
    var restart = confirm("Want to restart the game?");
    if (restart) {
      location.reload();
    } else {
      alert('Refresh the page if you want to play more!');
    }
  }
}

// add the function to the dice button
diceButton.addEventListener("click", rollTheDice);