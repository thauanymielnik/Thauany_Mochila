const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = localStorage.getItem("itens") || []

itens.forEach( (elemento => ){
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome": nome
        "quantidade": quantidade
    }

    criaElemento(itemAtual)

   if (existe) {
    itemAtual.id = existe.id

    criaElemento(itemAtual)

    Itens.push(itemAtual)
   } else {
    itemAtual.id = itens.length

    criaElemento(itemAtual)

    itens.push (itemAtual)
   }
    
    localStorage.setItem ("item", JSON.stringify(itemAtual))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+""']").innerHTML = item.quantidade
}