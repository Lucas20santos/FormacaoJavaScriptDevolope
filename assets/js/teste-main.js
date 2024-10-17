
const offset = 0
const limit = 10

url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limite=${limit}`


function convertPokemonToLi(pokemon)
{
    return `
       <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    
                </ol>
                <img src="" alt="${pokemon.name}">
            </div>
        </li>
    ` 
}


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

