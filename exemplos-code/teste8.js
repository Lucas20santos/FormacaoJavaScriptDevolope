const lucas = {
    nome: "lucas",
    idade: 30
}
// essa função não está no contexto do objeto
function gritar(prefixo)
{
    console.log(prefixo, this.nome)
}

// Ivocação direta
// gritar("olllaaaaa")

/** 
*   Ivocacao com o apply
*   Com o apply nós conseguimos passar o contexto do objeto para a função
*/ 

gritar.apply(lucas, ['olllaaaaa'])


/**
 * Ivocacao com o call
*/ 
gritar.call(lucas, 'olllaaaaa')
