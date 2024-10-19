function Pessoa(nome, idade)
{
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.falar = function () 
{
    console.log(`Meu não é: ${this.nome}`)
}

const lucas = {
    geneero: "masculino"
}

Pessoa.call(lucas, "nome", 32)

console.log(lucas)
