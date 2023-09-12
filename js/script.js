// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");
const plusBtn = document.querySelector("#btn-cont-plus");
const minusBtn = document.querySelector("#btn-cont-min");



let oldInputValue;


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
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)


    
    

    todoList.appendChild(todo);
    //Para limpara o que foi digitado no input
    todoInput.value = "";
    //Para voltar o foco ao todoInput
    todoInput.focus();

};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

//Função que atualiza o Titulo do Todo(Tarefa)
const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");


    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3");

        

        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    });


}

//Eventos


//Botão que adiciona o todo(Tarefa)
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    let Inputvalue = todoInput.value;

    if (Inputvalue != 0) {
        saveTodo(Inputvalue);
    }


});


//Variavel para o contador
let number = 0;

//Botão para aumentar o contador
plusBtn.addEventListener("click", () => {
    number++;
    document.querySelector("#cont").innerHTML = number;
});


//Botão para diminuir o contador
minusBtn.addEventListener("click", () => {
     console.log("Foii")
    if (number > 0){
        number--;
        document.querySelector("#count").textContent = number;
        }
    
});

//Usei o documento para esse evento ser usado em qualquer elemento
document.addEventListener("click", (e) => {

    const targetEl = e.target;

    //Selecionei o elemento pai div mais próxima
    const parentEl = targetEl.closest("div");

    //Armazenar o titulo na variavel para realizar as ações
    let todoTitle;

    //Como nem todo elemento tem um titulo
    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerHTML;
    }






    if (targetEl.classList.contains("finish-todo")) {
        //Adicionando a classe done para os todos que clicam na seta
        //É usado o toggle pois é possivel tanto selecionar quanto descelecionar
        parentEl.classList.toggle("done");
    }


    //Botão de remoção de tarefa
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")) {
        //Criando uma função para esconder o formulário 
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }


});



//Quando ele estiver na edição de uma ação
//Vai ter a opção de cancelar com o botão nesse caso 
//Vai ser criado o evento no botão de edição
cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
})


//Evento para editar o formulario ao clicar o botão

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue){
        //Atualizar
        updateTodo(editInputValue)
    }

    toggleForms()
})