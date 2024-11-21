const parent1 = document.getElementById("my-ol");
const inputBox = document.getElementById("my-input");

let todos = 1;
function addLi() {

    parent1.style.display = "block"
    const newLi = document.createElement("li");
    newLi.id = todos;
    //input box value will return user entered value in input
    newLi.innerHTML = `${inputBox.value}
                        <div><button id = "remove-btn" onclick="removeTodo(${todos})"> remove </button>
                        <button id = "completed-btn" onclick="completeTodo(${todos})"> Completed </button></div>`;
    todos++;
    parent1.appendChild(newLi);
    inputBox.value = "";
}

function removeTodo(todos) {
    const liToRemove = document.getElementById(`${todos}`);
    parent1.removeChild(liToRemove);
}

function completeTodo(todos){
    const isCompleted = document.getElementById(`${todos}`);
    isCompleted.style.textDecoration = "line-through";
}