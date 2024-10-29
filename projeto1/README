# FormacaoJavaScriptDevolope

## Criando um projeto com HTML/CSS para listagem de Pokemon

### Primeira Aula - Conceitos básicos

- Foi baixado o pacote http-server e instalado globalmente para podemos criar um servidor
- Foi visto como funciona a linguagem de marcação HTML
- Foi visto como funciona a linguagem de estilo CSS

### Segunda Aula - Criação do Site

- Normalize: para normalização do site para os diversos navegadores
- Organização do projeto:
    - criação da pasta assert: tudo que é css, html, imagens e js sera colocado nessa pasta
        - criação da pasta css
            - criação do arquivo global.css -> para os estilos globais
        - criação da pasta js
            - criação do arquivo main.js
- mobile first: para não ter que rescrever muito codigo

### Requisições HTTP

- URL: Protocolo:IP/caminho
    - protocolo: HTTP
    - IP que é traduzido pelo servidor DNS
    - e o caminho de identificação do recurso
    - Requisições Metodos:
        - GET
        - POST
        - PUT
        - DELETE
        - PATCH
    - Response Header e Request Header é a configuração da nossa API
    - Resquest body
    - Status code

### Colentando dados do API com JavaScript

- Usando a fetch API foi coletados os dados dos pokemon passando offset e limit
- usamos vários then metodos para passar só os valores que queremos


`

    fetch(url)
    .then((response) => response.json() )
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
    
        for (let i = 0; i < pokemonList.length; i++) 
        {
            const pokemon = pokemonList[i];
            const elemento = document.getElementById("pokemonListLi")
            console.log(convertPokemonToLi(pokemon))
            elemento.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    .catch((erro) => console.error(erro))
`

### Manipulação de HTML com JavaScript

- Foi criado uma variavel para pegar o elemento <ol></ol> do HTML com o id="pokemonListLi"
- Foi criado uma função que retorna uma estrutura de <li>
- através dos dados coletados da API foi passado o nome do pokemon de forma dinamica

### Organizando o codigo

Separando arquivos de manipulação do HTML em teste-main.js e arquivo de consulmo de API em 
teste-pokemon-api.js

### Crindo um modelo

Foi criado um modelo seperado para criar uma classe que severia de modelo para nosso projeto. Foi criado 
uma instância para usarmos ele para ficar mais fácil a busca por alguns atributos.

### Criação de botão

Foi criado um botão para inserir mais card na página.

### Curso avança do JavaScript

#### Variáveis

    - Fracamente tipado
    - case sensivel
    - os tipos serão convertido de acordo com o contexto

##### Exemplo

`

    var var1 = 10;
    var var2 = '20'

    console.log(var1 - var2) 
`

##### resultado

`

    node variaveis.js
    -10
`

##### Comentário

como o operador é aritmetrico, o javascript vai tentar converter o var2 para um tipo númerico para depois fazer a operação


##### Exemplo

`

    var var1 = 2;
    var var2 = 'string'

    console.log(var1 + var2) 
`

##### resultado

`

    node variaveis.js
    2string
`

##### Comentário

O javascript vai converter o 2 para um tipo string e 
depois fazer a operação de concatenação com o valor da 
outra váriavel

#### Hoisting

- Issamento é o comportamento de jogar para o inicio do 
programa todas as várias "var" e funções, mas não sua 
inicialização.

#### Escopos e diferenca de var, let e const

- Variáveis do tipo var se mantém ao escopo global e ao 
escopo de funções
- Variávies do tipo let e const não sofre hoisting e se 
mantem dentro do escopo local
- Variáveis do tipo const não sofre alteração para tipo 
primitivos

#### Tipos de dados
- Wrappers 
    - Classes que representam o mesmo tipo de dados
- Coersão de tipos
    - Ele converte os valores para o mesmo tipo para poder fazer as operações de forma coesa
- Boolean
- Null
    - Ausencia de valor
- Undefined
    - Ausencia de declaração
- String
- symbol
- Objetos
    - É uma coleção dinâmica de chave e valor
    
Não é possível mudar o tipo de uma variável de tipo 
primitivo.

#### Funções

##### Função de primeira classe e Função de alto nível

- Podemos passar uma função para um variável
- Podemos passar uma função como parâmetro de outra função
- Podemos retornar outra função
- function declaration vai sofre o hoisting, enquando a function expression não sofrerá o hoisting
    - Isso significa que a declaração sofre o hoisting, mas a atribuição não.
- Quando uma função está dentro de um objeto, ela assume o contexto do objeto.
    - Arrow function não tem um contexto não tem o this, logo o objeto não assume o contexto da arrow function.
- closures ou fechamento
    - As funções se lembram do contexto que foi declarada.
- Com os metodos .apply() e .call() conseguimos passar um contexto para a função

#### Lista no JavScript

- Pasta exemplos-code/teste10.js
- forEach()
- filter
- map
- reduce
- join e combinação de funções de manipulações
