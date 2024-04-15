import PokemonProps from "@/types/pokemonType";
import pokeIcon from "@/app/assets/pokeIcon.png";

interface PokeSpriteProps {
  pokemon: PokemonProps | undefined;
}

export function PokeSprite({ pokemon }: PokeSpriteProps) {
  return (
    <div className="bg-black/30 border-2 mb-1 border-black rounded-full drop-shadow-xlshadow-md shadow-lg shadow-black">
      {pokemon ? (
        <img
          className="size-28"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="Pokemon"
        />
      ) : (
        <img className="size-28 " src={pokeIcon} alt="Pokemon" />
      )}
    </div>
  );
}
