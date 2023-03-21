var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var doneButton = document.getElementsByClassName("donebutton");

function inputLenght() {
  return input.value.length;
}

function addTodo() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.parentNode.insertBefore(button, li.nextSibling);
  button.appendChild(document.createTextNode("Done!"));
  button.setAttribute("class", "donebutton");
  button.addEventListener("click", function () {
    button.previousElementSibling.remove();
    button.remove();
  });
  input.value = "";
}

function addTodoAfterClick() {
  if (inputLenght() > 0) {
    addTodo();
  }
}

function addTodoAfterEnter(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    addTodo();
  }
}

for (let i = 0; i < li.length; i++) {
  doneButton[i].addEventListener("click", function () {
    doneButton[i].previousElementSibling.remove();
    doneButton[i].remove();
  });
}

button.addEventListener("click", addTodoAfterClick);

input.addEventListener("keypress", addTodoAfterEnter);
