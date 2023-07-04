// Seleção de elementos
    const todoForme = document.querySelector("#form-principal");
    const todoInput = document.querySelector("#input-tarefas");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#form-edit");
    const editInput = document.querySelector("#input-tarefas");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");


//Funções

//Criação do elemento
const saveTodo = (text) =>{

    //criando um elemento
    const todo = document.createElement("div")
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text

    //Inserindo o elemento h3 no elemento div(todo)
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    //adicionando uma classe ao elemento criado
    doneBtn.classList.add("finished-todo");
    //Inserindo o icone dentro do botão
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button")
    //adicionando uma classe ao elemento criado
    editBtn.classList.add("edit-todo");
    //Inserindo o icone dentro do botão
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button")
    //adicionando uma classe ao elemento criado
    deleteBtn.classList.add("remove-todo");
    //Inserindo o icone dentro do botão
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);


    //Colocando a constante todo na lista geral
    todoList.appendChild(todo);


    //Limpar o texto
    todoInput.value = "";
    todoInput.focus();

}

//Eventos
todoForme.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});