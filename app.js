// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let inputAmigos = document.getElementById("amigo")

let agregarAmigo = () => {
    !inputAmigos.value ? alert("Por favor, inserte un nombre") : amigos.push(inputAmigos.value)
    inputAmigos.value = ""
}