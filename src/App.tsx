import { useState } from "react";
import Header from "./app/header";
import Pokemon from "./app/pokemon";

export default function App() {
  const [pokemonCount, setPokemonCount] = useState(1);

  const addPokemon = () => {
    setPokemonCount((prevCount) => prevCount + 1);
  };

  const resetPokemons = () => {
    setPokemonCount(1);
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
      mob:grid-cols-2"
      >
        {[...Array(pokemonCount)].map((_, index) => (
          <Pokemon key={index} />
        ))}
      </div>
    </main>
  );
}
