// Seleção de elementos
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#form-edit");
    const editInput = document.querySelector("#input-tarefas");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//Funções

//Criando a função para gerar a div de cadas tarefa
const saveTodo = (text) => {
    //Cria o elemento div
    const todo = document.createElement("div");
    //Adiciona a esse elemento a class todo
    todo.classList.add("todo")

    //Cria o elemento do titulo e armezana na variavel todoTitle
    const todoIitle = document.createElement("h3");
    //Insere ela no HTML pelo InnerText
    todoIitle.innerText = text;
    //Adiciona ela a estrutura
    todo.appendChild(todoIitle)


    //Cria o primeiro botão
    const doneBtn = document.createElement("button")
    //Adiciona a class finished todo 
    doneBtn.classList.add("finished-todo")
    //Adiciona o Icone no button
    //Utiliza o innerHTML por não ser texto
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    //Colocando o button no todo
    todo.appendChild(doneBtn);


    
      const editBtn = document.createElement("button")
      editBtn.classList.add("edit-todo")
      editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
      todo.appendChild(editBtn);

      const deleteBtn = document.createElement("button")
      deleteBtn.classList.add("remove-todo")
      deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      todo.appendChild(deleteBtn);
      

      todoList.appendChild(todo);






}


//Eventos

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //Armazenar a variavel 
    const inputValue = todoInput.value;

    if(inputValue != 0 ){
        saveTodo(inputValue)
        console.log(inputValue);
    }
    
})