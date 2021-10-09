const btnAdd = document.querySelector(".btn.add")
const inputAdd = document.querySelector(".inputText.add")
const inputRemove = document.querySelector(".inputText.del")
const contain = document.querySelector(".contain")

btnAdd.addEventListener("click",(event)=>{
    event.preventDefault()
    contain.innerHTML += `
    <form class="lista" >
        <input class="inputText del" value="${inputAdd.value}" type="text">
        <button class="btn del" >Remove</button>
    </form>`

})

console.log(inputRemove);
