import { useState } from "react";
import {
  DamageRelationsResponseType,
  DamageRelationsType,
  DamageType,
  PokemonType,
} from "../types/types";
import Pokemon from "../types/pokemonType";

import pokemonNames from "../utils/pokemonNames.json";

import {
  PokeQuadrupleDamage,
  PokeDoubleDamage,
  PokeHalfDamage,
  PokeNoDamage,
  PokeQuarterDamage,
} from "@/components/poke-damage";
import { PokeType, typeColors } from "@/components/poke-type";
import { PokeStats } from "@/components/poke-stats";
import { PokeSprite } from "@/components/poke-sprite";
import { PokeDetails } from "@/components/poke-details";

import { TextField, Autocomplete } from "@mui/material";

export default function Header() {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [relations, setRelations] = useState<DamageRelationsType | undefined>(
    undefined
  );

  const fetchPokemon = async (pokemonName: string) => {
    if (!pokemonName) return;
    const treatedPokemonName = pokemonName
      .replace(/\s/g, "-")
      .replace(/\♀/g, "-f")
      .replace(/\♂/g, "-m")
      .replace(/\./g, "")
      .replace(/\:/g, "")
      .trim()
      .toLowerCase();
    return fetch(`https://pokeapi.co/api/v2/pokemon/${treatedPokemonName}`)
      .then((response) => response.json())
      .then((data: Pokemon) => data);
  };

  const damageRelations = async (
    pokemonType1: string | undefined,
    pokemonType2: string | undefined
  ) => {
    if (!pokemonType1) return;
    const type1Relations: DamageRelationsType = await fetch(
      `https://pokeapi.co/api/v2/type/${pokemonType1}`
    )
      .then((response) => response.json())
      .then((data) => data.damage_relations)
      .then((data: DamageRelationsResponseType) => {
        return {
          double_damage_from: data.double_damage_from.map(
            (type: DamageType) => type.name
          ),
          half_damage_from: data.half_damage_from.map(
            (type: DamageType) => type.name
          ),
          no_damage_from: data.no_damage_from.map(
            (type: DamageType) => type.name
          ),
        };
      });
    let type2Relations: DamageRelationsType | undefined = undefined;
    if (pokemonType2) {
      type2Relations = await fetch(
        `https://pokeapi.co/api/v2/type/${pokemonType2}`
      )
        .then((response) => response.json())
        .then((data) => data.damage_relations)
        .then((data: DamageRelationsResponseType) => {
          return {
            double_damage_from: data.double_damage_from.map(
              (type: DamageType) => type.name
            ),
            half_damage_from: data.half_damage_from.map(
              (type: DamageType) => type.name
            ),
            no_damage_from: data.no_damage_from.map(
              (type: DamageType) => type.name
            ),
          };
        });
    }
    console.log(type1Relations, type2Relations);
    const newRelations: DamageRelationsType = {
      quadruple_damage_from: [],
      double_damage_from: [],
      half_damage_from: [],
      quarter_damage_from: [],
      no_damage_from: [],
    };
    if (type2Relations) {
      newRelations.quadruple_damage_from =
        type1Relations.double_damage_from.filter((type) =>
          type2Relations?.double_damage_from.includes(type)
        );
      newRelations.quarter_damage_from = type1Relations.half_damage_from.filter(
        (type) => type2Relations?.half_damage_from.includes(type)
      );
      newRelations.no_damage_from.push(
        ...type1Relations.no_damage_from,
        ...type2Relations.no_damage_from
      );
      newRelations.double_damage_from.push(
        ...type1Relations.double_damage_from.filter(
          (type) =>
            !type2Relations?.double_damage_from.includes(type) &&
            !type2Relations?.no_damage_from.includes(type) &&
            !type2Relations?.half_damage_from.includes(type)
        )
      );
      newRelations.double_damage_from.push(
        ...type2Relations.double_damage_from.filter(
          (type) =>
            !type1Relations.double_damage_from.includes(type) &&
            !type1Relations.no_damage_from.includes(type) &&
            !type1Relations.half_damage_from.includes(type)
        )
      );
      newRelations.half_damage_from.push(
        ...type1Relations.half_damage_from.filter(
          (type) =>
            !type2Relations?.half_damage_from.includes(type) &&
            !type2Relations?.no_damage_from.includes(type) &&
            !type2Relations?.double_damage_from.includes(type)
        )
      );
      newRelations.half_damage_from.push(
        ...type2Relations.half_damage_from.filter(
          (type) =>
            !type1Relations.half_damage_from.includes(type) &&
            !type1Relations.no_damage_from.includes(type) &&
            !type1Relations.double_damage_from.includes(type)
        )
      );
    } else {
      newRelations.double_damage_from = type1Relations.double_damage_from;
      newRelations.half_damage_from = type1Relations.half_damage_from;
      newRelations.no_damage_from = type1Relations.no_damage_from;
    }
    console.log(newRelations);
    return newRelations;
  };

  const getPokemon = async (pokemonName: string) => {
    const pokemonResponse = await fetchPokemon(pokemonName);
    setPokemon(pokemonResponse);
    console.log(pokemonResponse);
    const pokemonType1 = pokemonResponse?.types[0].type.name;
    const pokemonType2 = pokemonResponse?.types[1]?.type.name;
    console.log(pokemonType1, pokemonType2);
    const relationsResponse: DamageRelationsType | undefined =
      await damageRelations(pokemonType1, pokemonType2);
    setRelations(relationsResponse);
  };

  const selectedPokemonFirstType = pokemon?.types[0].type
    .name as keyof typeof typeColors;
  const selectedPokemonSecondType = pokemon?.types[1]?.type
    .name as keyof typeof typeColors;
  const selectedPokemonWeight = pokemon ? pokemon.weight / 10 : 0;
  const selectedPokemonHeight = pokemon ? pokemon.height / 10 : 0;
  const selectedPokemonHp = pokemon ? pokemon.stats[0].base_stat : 0;
  const selectedPokemonAtk = pokemon ? pokemon.stats[1].base_stat : 0;
  const selectedPokemonDef = pokemon ? pokemon.stats[2].base_stat : 0;
  const selectedPokemonSpAtk = pokemon ? pokemon.stats[3].base_stat : 0;
  const selectedPokemonSpDef = pokemon ? pokemon.stats[4].base_stat : 0;
  const selectedPokemonSpeed = pokemon ? pokemon.stats[5].base_stat : 0;

  return (
    <div
      className="p-3 w-full border-8 rounded-md border-black grid gap-1
      mob:grid-cols-2
      half:grid-cols-4
      "
      style={{
        background: selectedPokemonFirstType
          ? `linear-gradient(to bottom, 
                ${typeColors[selectedPokemonFirstType]},
                ${typeColors[selectedPokemonSecondType]})`
          : "linear-gradient(to bottom,#900222 10%,#FF7978 100%)",
      }}
    >
      <div className="flex flex-col w-full justify-center items-center bg-slate-500/50 rounded-md border border-black p-1">
        <Autocomplete
          sx={{
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "0.375rem",
            marginBottom: "0.25rem",
            width: "100%",
          }}
          color="#000"
          clearOnEscape
          size="small"
          options={pokemonNames}
          value={value}
          isOptionEqualToValue={(option, value) =>
            value ? option === value : true
          }
          onChange={(_, newValue) => {
            setValue(newValue || "");
            getPokemon(newValue || "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "0.375rem",
              }}
              accessKey="tab"
            />
          )}
        />
        <PokeSprite pokemon={pokemon} />
        <div className="h-[48px] w-[50%]">
          {pokemon?.types[0] && (
            <PokeType
              pokemonType={pokemon?.types[0]?.type.name as PokemonType}
            />
          )}
          {pokemon?.types[1] && (
            <PokeType
              pokemonType={pokemon?.types[1]?.type.name as PokemonType}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-around overflow-hidden bg-slate-500/50 rounded-md border border-black p-1">
        <PokeDetails
          selectedPokemonHeight={selectedPokemonHeight}
          selectedPokemonWeight={selectedPokemonWeight}
        />
        <PokeStats
          hp={selectedPokemonHp}
          atk={selectedPokemonAtk}
          def={selectedPokemonDef}
          spAtk={selectedPokemonSpAtk}
          spDef={selectedPokemonSpDef}
          speed={selectedPokemonSpeed}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center font-mono gap-y-1 bg-slate-500/50 rounded-md border border-black p-1">
        <PokeQuadrupleDamage relations={relations} />
        <PokeDoubleDamage relations={relations} />
        <PokeNoDamage relations={relations} />
      </div>
      <div className="flex flex-col w-full justify-center items-center font-mono gap-y-1 bg-slate-500/50 rounded-md border border-black p-1">
        <PokeHalfDamage relations={relations} />
        <PokeQuarterDamage relations={relations} />
      </div>
    </div>
  );
}
