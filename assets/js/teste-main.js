
function convertPokemonToLi(pokemon)
{
    console.log(pokemon.types.map((types) => types))
    return `
       <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    ` 
}

const elemento = document.getElementById("pokemonListLi")

pokeApi.getPokemons().then((pokemonList = []) => 
{    
    elemento.innerHTML += pokemonList.map(convertPokemonToLi).join("")
})
