const elemento = document.getElementById("pokemonListLi")
const loadMorePokemon = document.getElementById("loadMoreButton")
let offset = 0
let limit = 5

function convertPokemonToLi(pokemon)
{
    return `
       <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    ` 
}

function loadPokemonItem(offset, limit)
{
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => 
    {    
        elemento.innerHTML += pokemonList.map(convertPokemonToLi).join("")
    })
}

loadPokemonItem(offset, limit)

loadMorePokemon.addEventListener('click', () => 
{
    offset += limit
    loadPokemonItem(offset, limit)
})
