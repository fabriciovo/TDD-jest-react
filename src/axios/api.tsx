import axios from "axios";

const pokemonGet = () =>
  axios
    .get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
    .then((res) => res.data.pokemon)
    .catch((err) => console.error(err));

export default pokemonGet;
