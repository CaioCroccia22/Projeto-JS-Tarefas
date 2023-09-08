// Seleção de elementos
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#form-edit");
    const editInput = document.querySelector("#input-tarefas");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");

    let oldInputValue;

//Funções

<<<<<<< HEAD
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
=======
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

};

//Função para esconder ou mostrar o edit form
//Certo
const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForme.classList.toggle("hide");
    todoList.classList.toggle("hide");
  };

//Função para editar a tarefa
const updateTodo = (text) => {
    
    const todos = document.querySelectorAll(".todo")
  
    todos.forEach((todo) => {

      let todoTitle = todo.querySelector("h3");
  
      if (todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
  
       
      }
    });
  };
  
//Eventos

//Colocar a tarefa
todoForme.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});

//Botões das tarefas
document.addEventListener("click", (e) =>{

    const targetEl = e.target;
    //As ações no evento devem ser aplicados no elemento pai
    const parentEl = targetEl.closest("div");
    //Como não tem id iremos pegar pelo titulo
    let todoTitle;

    //Esses são os pré requisitos para ter um titulo
    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;

    }
    if (targetEl.classList.contains("finished-todo")) {
        //Adicionando(altera) a classe done para os todos clicados na seta
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    //Certo
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();
     //Parei aquiiiii
        editInput.value = todoTitle
        oldInputValue = todoTitle
      }
    });




cancelEditBtn.addEventListener("click", (e) => {
    //PreventDefault - Para não enviar formulário
    e.preventDefault();
    //Usando a função toogleForms para evitar repetição
    toggleForms();
  });

editForm.addEventListener("submit", (e) => {

    e.preventDefault();
  
    const editInputValue = editInput.value;
  
    if (editInputValue