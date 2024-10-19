/**
 * Lista no JavaScript
 */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach(i => 
// {
//     console.log(i)
// });

let listaNumerosPares = lista.filter((elem) => {
    return elem % 2 === 0
})

console.log(listaNumerosPares)

class Pessoa
{
    constructor(name)
    {
        this.name = name
    }
}

// Criação de lista de pessoas
const pessoas = [new Pessoa('lucas'), new Pessoa('maria'), new Pessoa("joão")]

// Mapeando os elementos pessoas de forma convencional
let listaNomesFormaConvencial = []
let listaNomesUsandoOMapMetod = []

for (let i = 0; i < pessoas.length; i++) {
    const element = pessoas[i].name;
    listaNomesFormaConvencial.push(element)
}

// Mapeando os elementos usando o MAP metodos
listaNomesUsandoOMapMetod = pessoas.map((elemento) => elemento.name)

console.log(listaNomesFormaConvencial)
console.log(listaNomesUsandoOMapMetod)

let listaHTML = pessoas.map((elemento) => {
    return `<li>${elemento.name}</li>`
})

// Reduzindo a lista a soma dos seus valores

let somaDeTodosOsValoresDaLista = lista.reduce((prevNumber, currNumber) => {
    return prevNumber + currNumber;
}, 0)

console.log(somaDeTodosOsValoresDaLista)

let transformarListaEmString = lista.join("-")
console.log(transformarListaEmString)
