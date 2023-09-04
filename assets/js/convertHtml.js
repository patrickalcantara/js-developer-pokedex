function convertPokemonToLi(pokemon) {
  return `
          <li class="pokemon ${pokemon.type}" 
          onclick="getDetailsPokemon(${pokemon.number});">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
  
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types
                        .map((type) => `<li class="type ${type}">${type}</li>`)
                        .join("")}
                  </ol>
  
                  <img src="${pokemon.photo}"
                       alt="${pokemon.name}">
              </div>
          </li>
      `;
}

function convertPokemonToDetails(pokemon) {
  return `
                <div class="${pokemon.types[0].type.name} detailsTop">
                  <div class="info">
                    <div>
                      <span class="arrowDetails" id="details"
                        >&#x2190;</span
                      >
                      <h2>${pokemon.name}</h2>
                      ${pokemon.types
                        .map(
                          ({ type }) =>
                            `<span class="${type.name} typeDetails">${type.name}</span>`
                        )
                        .join("")}
                    </div>
                    <span>#${pokemon.id}</span>
                  </div>
                  <img
                    src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="Bulbasaur"
                  />
                </div>
                <div class="detailsBottom">
                  <h3>Base Status</h3>
                  <hr />
                  <div class="status">
                    ${pokemon.stats
                      .map(
                        (statsSlot) =>
                          `<span>${statsSlot.stat.name}:</span><span>${statsSlot.base_stat}</span>`
                      )
                      .join("")}
                    
                    <span>Total:</span><span>${pokemon.stats.reduce(
                      (sum, cur) => sum + cur.base_stat,
                      0
                    )}</span>
                  </div>
                </div>
    `;
}
