const elementoLista = document.querySelector(".list")
const elementoInput = document.querySelector(".adiciona-tarefa")
const botaoAdiciona = document.querySelector(".botao-adicona")
const botaoDeleta = document.querySelector(".botao-deleta")

tarefas = []

function mostraTarefas (){
  
  elementoLista.innerHTML = ""

  for(tarefa of tarefas){
    const elementoTarefa = document.createElement("li")
    const textoTarefa = document.createTextNode(tarefa)

    const elementoLink = document.createElement("a")
    const pos = tarefas.indexOf(tarefa)
    
    const linkText = document.createTextNode("delete")
    elementoLink.appendChild(linkText)
    
    
    elementoLink.setAttribute("href","#")
    elementoLink.setAttribute("onclick",`deletaTarefa(${pos})`)
    
    elementoTarefa.appendChild(textoTarefa)
    elementoLista.appendChild(elementoTarefa)
    elementoTarefa.appendChild(elementoLink)
  }
}

mostraTarefas()



function addTarefa(){
  const textoTarefa = elementoInput.value
  tarefas.push(textoTarefa)
  
  elementoInput.value = ""
  
  mostraTarefas()
  
}

botaoAdiciona.addEventListener("click",(e)=>{
 e.preventDefault()
 addTarefa()
})

function deletaTarefa(pos){
  tarefas.splice(pos, 1)
  mostraTarefas()
}