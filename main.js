
let toDoItems = [];

var createdBy = document.querySelector("#createdBy");
createdBy.innerHTML += " PABLO";

function ToDo(description) {
      this.description = description;
      this.complete = false;
    }
  
ToDo.prototype.completeToDo = function() {
  this.complete = true;
}

  function buildToDo(toDo, index) {
    let toDoShell = document.createElement('div');
    toDoShell.classList.add("toDoShell");
    let toDoText = document.createElement('span');
    toDoText.innerHTML = toDo.description;
    toDoText.id = index;
    toDoText.addEventListener("click", completeToDo)
    if (toDo.complete) {
      toDoText.className = "completeText";
    }
    toDoShell.appendChild(toDoText);
    return toDoShell;
  }
  
function buildToDos(toDos) {
  return toDos.map(buildToDo)
  }

function displayToDos() {
  let toDoContainer = document.getElementById("toDoContainer")
  toDoContainer.innerHTML = ""
  let build = buildToDos(toDoItems)
  for (let i = 0; i < build.length; i++) {
    toDoContainer.appendChild(build[i])
  }
}

function addToDo() {
    let toDoInput = document.querySelector("#toDoInput");
    let newTodo = new ToDo(toDoInput.value);
    toDoItems.push(newTodo);
    toDoInput.value = ""; 
  displayToDos();
}

let bttonAdd = document.querySelector("#addButton");
bttonAdd.addEventListener("click", addToDo);

function completeToDo(event) {
    const index = event.target.id;
    toDoItems[index].completeToDo();
    displayToDos();
  }
  
 
displayToDos()
