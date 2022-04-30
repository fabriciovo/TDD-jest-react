import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "./Types/types";
function App() {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => {

      const fetchPokemons = async () => {
          const { data } = await axios.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
          setPokemons(data.pokemon)
      }

      fetchPokemons()

  }, []);

  return (
    <div className="App">
      {loading && <>Loading...</>}
      <ul>
          {pokemons?.map((pokemon: Pokemon, index:number) => {
            return (<li data-testid={`pokemon-div-${index}`} key={pokemon.id}>{pokemon.name}</li>)
          })}
        </ul>
    </div>
  );
}

export default App;
