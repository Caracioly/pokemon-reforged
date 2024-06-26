import { PokemonType } from "@/types/types";
import { PokeType } from "./poke-type";

interface PokeTypeModal {
  typeName: PokemonType;
}

export function PokeTypeModal({ typeName }: PokeTypeModal) {
  return (
    <div className="bg-slate-700/85 rounded-lg border-black border-4 transform translate-y-[20%] translate-x-[50%] absolute z-40 w-[50%] h-[50%]">
      <div className="">
        <PokeType pokemonType={typeName as PokemonType}/>
      </div>
    </div>
  );
}

