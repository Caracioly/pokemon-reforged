import { useState } from "react";
import { PokeType } from "@/components/poke-type";
import { TypeToolTip } from "@/components/poke-tooltip";
import { PokemonType } from "@/types/types";

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

export default function Header() {
  const [toolTips, setToolTips] = useState<Record<string, boolean>>({});

  const handleToolTipToggle = (tooltip: string) => {
    setToolTips((prevState) => ({
      ...prevState,
      [tooltip]: !prevState[tooltip],
    }));
  };

  return (
    <div className="bg-slate-800 p-2 border-b-4 border-slate-900">
      <div className="grid grid-cols-9 items-center justify-center px-1 gap-x-1">
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
    </div>
  );
}
