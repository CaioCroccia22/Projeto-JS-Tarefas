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
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);
    //Para limpara o que foi digitado no input
    todoInput.value = "";
    //Para voltar o foco ao todoInput
    todoInput.focus();


}


//Eventos
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    let Inputvalue = todoInput.value;

    if (Inputvalue != 0) {
        saveTodo(Inputvalue);
    }

    
});

// 

document.addEventListener ("click", (e) => {

    const targetEl = e.target;
    
    //Selecionei o elemento pai div mais próxima
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish-todo")){
        //Adicionando a classe done para os todos que clicam na seta
        //É usado o toggle pois é possivel tanto selecionar quanto descelecionar
        parentEl.classList.toggle("done");
    }


    //Botão de remoção de tarefa
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

   
});

