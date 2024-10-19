console.log("Hello")

/**
 * Enquanto essa é a mesma coisa de ser declarada, mas não será inicializada
 * A declaração sofre o hoisting, mas a inicialização só acontecerá depois
 */

let nomeDeOutraFuncao;
nomeDeOutraFuncao = function()
{

}
// Quando inicializa o programa essa declaração é jogada 
// para o topo ou sofre o hoisting
function nomeDaFuncao()
{

}
