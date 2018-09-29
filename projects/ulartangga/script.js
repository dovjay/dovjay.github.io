// welcome menu to choose how many player to play the game
var button1player = document.getElementById('p1');
var button2player = document.getElementById('p2');
var button3player = document.getElementById('p3');
var button4player = document.getElementById('p4');
var mainMenu = document.getElementById('main-menu');
var maxPlayer = 0;

button1player.addEventListener("click", function() {
  mainMenu.style.display = "none";
  maxPlayer = 1;
  makePlayer(maxPlayer);
  positionDisplay();
});

button2player.addEventListener("click", function() {
  mainMenu.style.display = "none";
  maxPlayer = 2;
  makePlayer(maxPlayer);
  positionDisplay();
});

button3player.addEventListener("click", function() {
  mainMenu.style.display = "none";
  maxPlayer = 3;
  makePlayer(maxPlayer);
  positionDisplay();
});

button4player.addEventListener("click", function() {
  mainMenu.style.display = "none";
  maxPlayer = 4;
  makePlayer(maxPlayer);
  positionDisplay();
});

// make maxPlayer and place them to the first position
function makePlayer(maxPlayer) {
  for (let i=0; i<maxPlayer; i++) {
    var user = document.createElement('div');
    user.setAttribute('id', `player${i+1}`);
    user.appendChild(document.createTextNode(i+1));

    var pos = document.createElement('span');
    pos.setAttribute('id', `pos${i+1}`);
    pos.appendChild(document.createTextNode('1'));
    user.appendChild(pos);
    playerPosition.push(pos);
    boardChilds['90'].appendChild(user);
  }
}

// make the board for the game
var board = document.getElementById('board');
function makeBoard() {
  for (let i=100; i>0; i--) {
    if (i % 10 == 0 && i % 20 != 0) {
      for (let j=i-10; j<i; j++) {
        var box = document.createElement('div');
        var p = document.createElement('p');
        box.setAttribute('class', 'box');
        p.appendChild(document.createTextNode(j+1));
        box.appendChild(p);
        board.appendChild(box);    
      }
      i -= 9;
    } else {
      var box = document.createElement('div');
        var p = document.createElement('p');
        box.setAttribute('class', 'box');
        p.appendChild(document.createTextNode(i));
        box.appendChild(p);
        board.appendChild(box);    
    }
  }
}

// get the boardChilds and playerPosition
var boardChilds = board.children;
var playerPosition = [];

// make positionDisplay function
function positionDisplay() {
  var display = document.getElementById('position-display');
  display.innerHTML = "";
  for (let i=0; i<maxPlayer; i++) {
    var para = document.createElement('p');
    var text = document.createTextNode(`Player ${i+1} position: `+ playerPosition[i].innerHTML);
    para.appendChild(text);
    display.appendChild(para);
  }
}

window.onload = makeBoard();