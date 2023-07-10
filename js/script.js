// Seleção de elementos
    const todoForme = document.querySelector("#form-principal");
    const todoInput = document.querySelector("#input-tarefas");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#form-edit");
    const editInput = document.querySelector("#input-tarefas");   
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");

    let oldInputValue;

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

};

//Função para esconder ou mostrar o edit form
const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForme.classList.toggle("hide");
    todoList.classList.toggle("hide");
  };


const updateTodo = (text) => {
    const todos = document.querySelectorAll("todo")

    //Eles não são selecionados no começo pois os elementos 
    //podem sofrer alteração ao longo do problema
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText === oldInputValue ) {
            todoTitle.innerText = text;
        }
    })
}
  
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

    //Esconder o formulario e mostrar outro
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();

        //Muda o valor do input
        editInput.value = todoTitle

        //Salva o valor anterior
        oldInputValue.value = todoTitle

    //Na edição precisa mapear tanto titulo do input quanto o valor da edição

        
      }
});


cancelEditBtn.addEventListener("click", (e) => {
    //PreventDefault - Para não enviar formulário
    e.preventDefault();
    //Usando a função toogleForms para evitar repetição
    toggleForms();
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if (editInputValue) {
        //atualizar
        updateTodo(editInputValue) {

        }
    }

  })