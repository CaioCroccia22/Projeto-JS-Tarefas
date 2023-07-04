// Seleção de elementos
    const todoForme = document.querySelector("#form-principal");
    const todoInput = document.querySelector("#input-tarefas");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#form-edit");
    const editInput = document.querySelector("#input-tarefas");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");


//Funções


//Eventos
todoForme.addEventListener("submit", (e) => {
   
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        console.log(inputValue);
    }
});