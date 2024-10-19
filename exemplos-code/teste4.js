function falarMeuNome()
{
    console.log("Meu nome é Lucas");
}

function falarMeuNomeCompleto(falarMeuNome)
{
    falarMeuNome();
    console.log("Lucas de Souza Santos");
    return falarMeuNome;
}

falarMeuNomeCompleto(falarMeuNome);
