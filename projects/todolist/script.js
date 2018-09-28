var todolist = document.getElementById('list');
var inputButton = document.getElementById('button');
var inputText = document.getElementById('input');

function getLength() {
  return inputText.value.length;
}

function checkInputLength() {
  if (getLength() > 0) {
    addTask();
  }
}

function addTask() {
  var li = document.createElement('li');

  var theText = document.createTextNode(inputText.value);
  li.appendChild(theText);

  var counter = 1;
  var savedInput = li.innerHTML;
  function done() {
    if (counter % 2 != 0) {
      li.classList.toggle("done");
      li.innerHTML = '<i class="fa fa-check"> </i>&nbsp;&nbsp;'   + savedInput;
      li.appendChild(deleteButton);
      counter++;
    } else {
      li.classList.toggle("done");
      li.innerHTML = savedInput;
      li.appendChild(deleteButton);
      counter++;
    }
  }
  function pressed() {
    li.setAttribute('style', 'top: 1px;');
  }
  function release() {
    li.setAttribute('style', 'top: 0');
  }
  li.addEventListener("mousedown", pressed);
  li.addEventListener("mouseup", release);
  li.addEventListener("click", done);

  var deleteButton = document.createElement('button');
  var close = document.createElement('i');
  close.setAttribute('class', 'fa fa-trash-o');
  close.style.fontSize = '1.8em';
  deleteButton.setAttribute('class', 'delete-button');
  deleteButton.appendChild(close);
  deleteButton.addEventListener("click", deleteList);

  function deleteList() {
    todolist.removeChild(li);
  }

  li.appendChild(deleteButton);
  todolist.appendChild(li);
  inputText.value = "";
}

inputButton.addEventListener("click", checkInputLength);