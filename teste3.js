const pessoa = {
    genero: "masculino"
}

const documentos = {
    cpf: '000.000.000-00'
}

const lucas = Object.create(pessoa, documentos)

lucas.nome = "Lucas"

console.log(lucas)
