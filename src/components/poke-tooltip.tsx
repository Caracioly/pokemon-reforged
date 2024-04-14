import { PokemonType } from "@/types/types";
import { PokeType } from "./poke-type";
import pokemonWeaknesses from "@/utils/pokemonWeaknesses.json";
import { Key } from "react";

interface PokeToolTipProps {
  label: string;
  value?: number;
}

export function PokeToolTip({ label, value }: PokeToolTipProps) {
  return (
    <div className="absolute z-50 -translate-y-10 translate-x-10 transform bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md">
      {value ? (
        <span className="rounded-md animate-bounce">
          {`${label}→ ${value}`}
        </span>
      ) : (
        <span className="rounded-md">{`${label}`}</span>
      )}
    </div>
  );
}

export function TypeToolTip({
  label,
}: Record<string, keyof typeof pokemonWeaknesses>) {
  return (
    <div className="absolute z-50 screen transform -translate-x-10 w-max translate-y-2">
      {pokemonWeaknesses[label].double_damage_from.length > 0 && (
        <div className="text-center bg-yellow-500/90 p-0.5 rounded-md border-2 border-black w-full">
          <span className="text-nowrap">Damage 2x</span>
          <div className="grid grid-cols-2 w-full justify-center">
            {pokemonWeaknesses[label].double_damage_from.map((type: Key) => (
              <PokeType key={type} pokemonType={type as PokemonType} />
            ))}
          </div>
        </div>
      )}

      {pokemonWeaknesses[label].half_damage_from.length > 0 && (
        <div className="text-center bg-red-500/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden ">
          <span className="text-nowrap">Damage 0.5x</span>
          <div className="grid grid-cols-2 w-full justify-center">
            {pokemonWeaknesses[label].half_damage_from.map((type: Key) => (
              <PokeType key={type} pokemonType={type as PokemonType} />
            ))}
          </div>
        </div>
      )}

      {pokemonWeaknesses[label].no_damage_from.length > 0 && (
        <div className="text-center bg-purple-900/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
          <span className="text-nowrap">Imune</span>
          <div className="grid grid-cols-2 w-full justify-center">
            {pokemonWeaknesses[label].no_damage_from.map((type: Key) => (
              <PokeType key={type} pokemonType={type as PokemonType} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type StatsToolTipProps = {
  children: JSX.Element;
};

export function StatsToolTip({ children }: StatsToolTipProps) {
  return <div>{children}</div>;
}
