// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let inputAmigos = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")

let agregarAmigo = () => {
    if (!inputAmigos.value) {
        alert("Por favor, inserte un nombre")
    } else {
        amigos.push(inputAmigos.value)
        inputAmigos.value = ""
        actualizarLista()
    }
}

let actualizarLista = () => {
    listaAmigos.innerHTML = ""

    amigos.forEach((amigo) => {
        let nuevoLi = document.createElement("li")
        nuevoLi.textContent = amigo
        listaAmigos.appendChild(nuevoLi)
    })
}