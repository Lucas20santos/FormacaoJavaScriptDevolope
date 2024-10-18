const pokeApi = {}

function convertPokeApiDetailsPokemon(pokemonDetail)
{
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.id
    pokemon.name = pokemonDetail.name
    pokemon.types = pokemonDetail.types.map((types) => types.type.name)
    pokemon.type = pokemon.types[0]
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
 }

pokeApi.getPokemonDetail = (pokemon) => 
{
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailsPokemon)
}

pokeApi.getPokemons = (offset1 = 0, limit1 = 5) =>  
{
    url = `https://pokeapi.co/api/v2/pokemon?offset=${offset1}&limite=${limit1}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}
