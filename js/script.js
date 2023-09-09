// Seleção de elementos
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#edit-form");
    const editInput = document.querySelector("#edit-input");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
    const searchInput = document.querySelector("#erase-button");
    const filterBtn = document.querySelector("#filter-select");

//Funções
//Função que vai receber um text como parametro e vai retornar
//A div de class todo

const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3")
    //Vai ser o texto que recebe pela função, ou seja o texto digita no input
    todoTitle.innerHTML = text
    todo.appendChild(todoTitle)
}


//Eventos
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    let Inputvalue = todoInput.value;

    if(Inputvalue != 0){
        saveTodo(Inputvalue);
    }
    
    console.log(Inputvalue);
})

