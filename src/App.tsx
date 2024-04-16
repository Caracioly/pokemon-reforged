import { useState } from "react";
import Header from "./app/header";
import Pokemon from "./app/pokemon";
import { FaArrowUp } from "react-icons/fa6";

export default function App() {
  const [pokemonCount, setPokemonCount] = useState(1);
  const [pokemonList, setPokemonList] = useState<{ index: number }[]>([]);

  const addPokemon = () => {
    setPokemonCount((prevCount) => prevCount + 1);
    setPokemonList([...pokemonList, { index: pokemonCount }]);
  };

  const resetPokemons = () => {
    setPokemonCount(1);
    setPokemonList([]);
  };

  const removePokemon = (indexToRemove: number) => {
    setPokemonList(
      pokemonList.filter((pokemon) => pokemon.index !== indexToRemove)
    );
  };

  return (
    <main>
      <Header onAddPokemon={addPokemon} onResetPokemons={resetPokemons} />
      <div
        className="mt-10 pt-4 min-h-screen p-1 w-full bg-slate-600 gap-2 grid 
      xl:grid-cols-6
      lg:grid-cols-5
      md:grid-cols-4
      half:grid-cols-3
      sm:grid-cols-3
      mob:grid-cols-2
      "
      >
        {pokemonList.map(({ index }) => (
          <Pokemon
            index={index}
            key={index}
            handleRemoveCard={() => removePokemon(index)}
          />
        ))}
        {pokemonList.length < 1 && (
          <div className="fixed right-8 flex flex-row">
            <span className="text-slate-900 font-bold font-mono mt-1">
              Click to add a new pokemon
            </span>
            <FaArrowUp className="animate-bounce mt-1" color="#0F172A"></FaArrowUp>
          </div>
        )}
      </div>
    </main>
  );
}
