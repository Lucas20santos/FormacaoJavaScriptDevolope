function funcao1()
{
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const lucas = {
    nome: "Lucas",
    funcao1,
    funcao2
}

lucas.funcao1()
lucas.funcao2()
