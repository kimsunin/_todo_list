const todoForm = document.getElementById("todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")

TODOS_KEY = "todos"
let toDos = []
 
function savedToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove()
    savedToDos()
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleTodoSubmit(event){
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const newTodoObj= {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    savedToDos()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo) 
}
