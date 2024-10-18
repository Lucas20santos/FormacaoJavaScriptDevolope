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
