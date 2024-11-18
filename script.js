let tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


const addTask = document.querySelector(".form__container")
addTask.addEventListener("submit", function(event){
event.preventDefault()

const taksName = document.querySelector(".form__input--text");
const typeEscolhido = document.querySelector(".form__input--priority");

tasks.push({title: taksName.value, type: typeEscolhido.value});
createTaskItem (taksName.value, typeEscolhido.value)
})


function renderElements (arrayTasks){
  const ul = document.querySelector(".tasks__list")
  function removerElementos (){
    if (ul.hasChildNodes()) {
      ul.removeChild(ul.children[0])
      ul.removeChild(ul.children[0])
      ul.removeChild(ul.children[0])
    }
  }
  removerElementos()

  
  let taskTitle = []
  let taskType = []

  for(let i = 0; i < arrayTasks.length; i++){
    taskTitle = arrayTasks[i].title
    taskType = arrayTasks[i].type
    createTaskItem (taskTitle, taskType)
  }
  return createTaskItem
}

console.log(renderElements(tasks))

function createTaskItem (title, type){
  const ul = document.querySelector(".tasks__list")
  const li = document.createElement("li")
  const div = document.createElement("div")
  const span = document.createElement("span")
  const p = document.createElement("p")
  const button = document.createElement("button")
  const buttonDelitTaks = document.createElement("button")

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div)
  li.appendChild(button)
  li.appendChild(buttonDelitTaks)

  p.innerText = title

  div.classList.add("task-info__container")
  li.classList.add("task__item")
  span.classList.add("task-type")
  span.classList.add("span-" + type)
  button.classList.add("task__button--remove-task")
  buttonDelitTaks.classList.add("task__button--dilit-task")



  buttonDelitTaks.addEventListener("click", function(event){
    let titleRemoved = p.innerHTML
  
    let taskDeletd = tasks.map((e) => { return e.title; }).indexOf(titleRemoved)
    
    tasks.splice(taskDeletd, 1)
    li.remove()
  })

  if (type === "Urgente"){
    button.style.backgroundColor = "#e40404"
  } else if (type === "Importante"){
    button.style.backgroundColor = "#f3a703"
  } else if (type === "Normal"){
    button.style.backgroundColor = "#028302"
  }

  ul.appendChild(li)
  
}

console.log(tasks)