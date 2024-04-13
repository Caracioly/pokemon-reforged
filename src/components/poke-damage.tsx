import { DamageRelationsType } from "../types/types";
import { PokemonType } from "../types/types";
import { PokeType } from "@/components/poke-type";

interface DamageRelationsComponentProps {
  relations: DamageRelationsType | undefined;
}

function PokeQuadrupleDamage({ relations }: DamageRelationsComponentProps) {
  return (
    <div className="w-full">
      {relations?.quadruple_damage_from &&
        relations.quadruple_damage_from.length > 0 && (
          <div className="text-center bg-yellow-500/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
            <span className="text-nowrap">Damage 4x</span>
            <div className="grid grid-cols-2 w-full justify-center">
              {relations?.quadruple_damage_from &&
                relations.quadruple_damage_from.map((type) => (
                  <PokeType key={type} pokemonType={type as PokemonType} />
                ))}
            </div>
          </div>
        )}
    </div>
  );
}

function PokeDoubleDamage({ relations }: DamageRelationsComponentProps) {
  return (
    <div className="w-full">
      {relations?.double_damage_from &&
        relations.double_damage_from.length > 0 && (
          <div className="text-center bg-orange-500/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
            <span className="text-nowrap">Damage 2x</span>
            <div className="grid grid-cols-2 w-full justify-center">
              {relations?.double_damage_from &&
                relations.double_damage_from.map((type) => (
                  <PokeType key={type} pokemonType={type as PokemonType} />
                ))}
            </div>
          </div>
        )}
    </div>
  );
}

function PokeHalfDamage({ relations }: DamageRelationsComponentProps) {
  return (
    <div className="w-full">
      {relations?.half_damage_from && relations.half_damage_from.length > 0 && (
        <div className="text-center bg-fuchsia-900/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
          <span className="text-nowrap">Damage 0.5x</span>
          <div className="grid grid-cols-2 w-full justify-center">
            {relations?.half_damage_from &&
              relations.half_damage_from.map((type) => (
                <PokeType key={type} pokemonType={type as PokemonType} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PokeQuarterDamage({ relations }: DamageRelationsComponentProps) {
  return (
    <div className="w-full">
      {relations?.quarter_damage_from &&
        relations.quarter_damage_from.length > 0 && (
          <div className="text-center bg-red-900/90 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
            <span className="text-nowrap">Damage 0.25x</span>
            <div className="grid grid-cols-2 w-full justify-center">
              {relations?.quarter_damage_from &&
                relations.quarter_damage_from.map((type) => (
                  <PokeType key={type} pokemonType={type as PokemonType} />
                ))}
            </div>
          </div>
        )}
    </div>
  );
}

function PokeNoDamage({ relations }: DamageRelationsComponentProps) {
  return (
    <div className="w-full">
      {relations?.no_damage_from && relations.no_damage_from.length > 0 && (
        <div className="text-center bg-black/50 p-0.5 rounded-md border-2 border-black w-full  overflow-hidden">
          <span className="text-nowrap">Imune</span>
          <div className="grid grid-cols-2 w-full justify-center">
            {relations?.no_damage_from &&
              relations.no_damage_from.map((type) => (
                <PokeType key={type} pokemonType={type as PokemonType} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export {
  PokeQuadrupleDamage,
  PokeDoubleDamage,
  PokeHalfDamage,
  PokeQuarterDamage,
  PokeNoDamage,
};
