import { useState } from "react";
import { PokeType } from "@/components/poke-type";
import { TypeToolTip } from "@/components/poke-tooltip";
import { PokemonType } from "@/types/types";
import { FaPlus, FaTrash, FaAngleDown, FaAngleUp } from "react-icons/fa";

const pokemonTypes = [
  "Bug",
  "Water",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Psychic",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Poison",
  "Ground",
  "Rock",
  "Ice",
  "Normal",
  "Steel",
  "Grass",
];

type HeaderProps = {
  onAddPokemon?: () => void;
  onResetPokemons?: () => void;
};

export default function Header({ onAddPokemon, onResetPokemons }: HeaderProps) {
  const [toolTips, setToolTips] = useState<Record<string, boolean>>({});
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleToolTipToggle = (tooltip: string) => {
    setToolTips((prevState) => ({
      ...prevState,
      [tooltip]: !prevState[tooltip],
    }));
  };

  const handleToggleHeaderVisibility = () => {
    setHeaderVisible(!headerVisible);
  };

  return (
    <div
      className="bg-slate-800 py-2 px-8 border-b-4 border-slate-900 fixed w-full top-0 z-30"
      onMouseLeave={() => setHeaderVisible(false)}
    >
      <div className="w-full justify-end flex">
        <div className="grid grid-cols-3 place-items-end pt-1 gap-4">
          {!headerVisible ? (
            <FaAngleDown
              onClick={handleToggleHeaderVisibility}
              color="#FFFF"
              size={18}
              className="hover:bg-slate-950 rounded-full
          hover:cursor-pointer h-full w-full"
            ></FaAngleDown>
          ) : (
            <FaAngleUp
              onClick={handleToggleHeaderVisibility}
              color="#FFFF"
              size={18}
              className="hover:bg-slate-950 rounded-full
          hover:cursor-pointer h-full w-full"
            ></FaAngleUp>
          )}
          <FaTrash
            color="white"
            size={18}
            onClick={onResetPokemons}
            className="hover:bg-slate-950 rounded-full
          hover:cursor-pointer h-full w-full"
          ></FaTrash>
          <FaPlus
            color="white"
            size={18}
            onClick={onAddPokemon}
            className="hover:bg-slate-950 rounded-full
          hover:cursor-pointer h-full w-full"
          ></FaPlus>
        </div>
      </div>
      {headerVisible && (
        <div className="grid items-center justify-center px-1 gap-x-1 grid-cols-3 half:grid-cols-6 md:grid-cols-9 min-md:px-16">
          {pokemonTypes.map((type) => (
            <div
              key={type}
              className="hover:cursor-pointer"
              onMouseEnter={() => handleToolTipToggle(type)}
              onMouseLeave={() => handleToolTipToggle(type)}
            >
              <PokeType pokemonType={type.toLowerCase() as PokemonType} />
              {toolTips[type] && (
                <div className="">
                  <TypeToolTip label={type.toLowerCase() as PokemonType} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
