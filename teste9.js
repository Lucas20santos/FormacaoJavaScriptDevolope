function adicao(x, y)
{
    return x + y
}

function calcular(x, operacao, y)
{
    console.log(operacao(x, y))
}

calcular(10, adicao, 20)
