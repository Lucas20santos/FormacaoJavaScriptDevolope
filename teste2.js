// Verificando a tipagem das variáveis no javascript

// let x = 10;

// console.log(typeof(x));

// x = 'Que texto bonito';

// console.log(typeof(x));

// Orientada a prototype e funções construtoras
// os prototipos que seram herdados precisando serem inicializados antes

const pessoaIdade = {
    idade: 32
}

const pessoaDetalhes = {
    genero: "masculino",
    __proto__: pessoaIdade
}

const renan = {
    nome: "Renan",
    __proto__: pessoaDetalhes
}

// Funções construtoras
function Pessoa(nome, idade)
{
    this.nome = nome;
    this.idade = idade
}

Pessoa.prototype.falar = function()
{
    console.log(`Meu nome é: ${this.nome}`)
}


class Pessoa2{
    constructor(nome, idade)
    {
        this.nome = nome
        this.idade = idade
    }

    falar()
    {
        console.log(`Meu nome é: ${this.nome}. E minha idade é: ${this.idade}`)
    }
}

const lucas = new Pessoa2('Lucas', 32)

lucas.falar()



