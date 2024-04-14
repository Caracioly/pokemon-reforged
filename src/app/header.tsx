import { useState } from "react";
import { PokeType } from "@/components/poke-type";
import { TypeToolTip } from "@/components/poke-tooltip";
import { PokemonType } from "@/types/types";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
    <div className="bg-slate-800 py-2 px-8 border-b-4 border-slate-900">
      <div className="flex justify-center items-center animate-bounce">
        {!headerVisible ? (
          <IoIosArrowDown
            onClick={handleToggleHeaderVisibility}
            color="#FFFF"
            size={14}
          ></IoIosArrowDown>
        ) : (
          <IoIosArrowUp
            onClick={handleToggleHeaderVisibility}
            color="#FFFF"
            size={14}
          ></IoIosArrowUp>
        )}
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
