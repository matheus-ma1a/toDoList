const tarefaDigitada = document.querySelector(".adiciona-tarefa")
const botaoAdiciona = document.querySelector(".botao-adicona")


let listaDeTarefas = []

botaoAdiciona.addEventListener("click",(event)=>{
  event.preventDefault()
  listaDeTarefas.push(tarefaDigitada.value)
  
  console.log(listaDeTarefas);
})

