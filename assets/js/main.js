const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const pokemonItem = document.getElementsByClassName("pokemon");
const detailsPokemon = document.getElementById("detailsPokemon");
const contentPokemon = document.getElementById("content");

var returnDetails = "";

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

function loadDetailsPokemon(pokemon) {
  contentPokemon.style.display = "none";

  const newHtml = convertPokemonToDetails(pokemon);
  detailsPokemon.innerHTML = newHtml;
  detailsPokemon.style.display = "block";

  returnDetails = document.getElementById("details");
  returnDetails.addEventListener("click", () => {
    returnPokemonList();
  });
}

function returnPokemonList() {
  detailsPokemon.innerHTML = "";
  detailsPokemon.style.display = "none";
  contentPokemon.style.display = "block";
}
