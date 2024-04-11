export interface ColorsType {
  [key: string]: string;
}

export interface DamageType {
  name: string;
  url: string;
}

export interface DamageRelationsResponseType {
  double_damage_from: DamageType[];
  half_damage_from: DamageType[];
  no_damage_from: DamageType[];
}

export interface DamageRelationsType {
  quadruple_damage_from?: string[];
  double_damage_from: string[];
  half_damage_from: string[];
  quarter_damage_from?: string[];
  no_damage_from: string[];
}

export interface PokemonTypes {
  bug: string;
  water: string;
  grass: string;
  dark: string;
  dragon: string;
  electric: string;
  fairy: string;
  psychic: string;
  fighting: string;
  fire: string;
  flying: string;
  ghost: string;
  poison: string;
  ground: string;
  rock: string;
  ice: string;
  normal: string;
  steel: string;
  stellar: string;
}

export type PokemonType = "bug" | "water" | "grass" | "dark" | "dragon" | "electric" | "fairy" | "psychic" | "fighting" | "fire" | "flying" | "ghost" | "poison" | "ground" | "rock" | "ice" | "normal" | "steel" | "stellar" | "undefined";

export default DamageRelationsType;
