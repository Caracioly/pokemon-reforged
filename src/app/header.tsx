import itemsNames from "@/utils/itemsNames.json";
import movesNames from "@/utils/movesNames.json";
import abilityNames from "@/utils/abilityNames.json";

import itemsFiltered from "@/utils/data/itemsFiltered.json";
import abilityFiltered from "@/utils/data/abilityFiltered.json";
import moveUnfiltered from "@/utils/data/movesUnfiltered.json"

import { Move } from "@/components/poke-data";

import { useState } from "react";
import { PokeType } from "@/components/poke-type";
import { TypeToolTip } from "@/components/poke-tooltip";
import { PokemonType } from "@/types/types";
import {
  FaPlus,
  FaTrash,
  FaAngleDown,
  FaAngleUp,
  FaSearch,
} from "react-icons/fa";
import { Autocomplete } from "@mui/material";
import { PokeHeldItem, PokeAbility, PokeMove } from "@/components/poke-data";

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
  const [heldItem, setHeldItems] = useState("");
  const [ability, setAbility] = useState("");
  const [moves, setMoves] = useState("");

  const [itemComponent, setItemComponent] = useState(false);
  const [abilityComponent, setAbilityComponent] = useState(false);
  const [moveComponent, setMoveComponent] = useState(false);

  const handleToolTipToggle = (tooltip: string) => {
    setToolTips((prevState) => ({
      ...prevState,
      [tooltip]: !prevState[tooltip],
    }));
  };

  const handleToggleHeaderVisibility = () => {
    setHeaderVisible(!headerVisible);
  };

  const handleHeldItemInfo = () => {
    setItemComponent(!itemComponent);
  };

  const handleAbilityInfo = () => {
    setAbilityComponent(!abilityComponent);
  };

  const handleMoveInfo = () => {
    setMoveComponent(!moveComponent);
  };

  const heldItemIndex = itemsFiltered.findIndex(
    (item) => item.name === heldItem
  );

  const abilityIndex = abilityFiltered.findIndex(
    (abilityItem) => abilityItem.name === ability
  );

  const movesFormated: keyof typeof moveUnfiltered = moves.replace(/\s/g, "").toLowerCase() as keyof typeof moveUnfiltered;

  return (
    <div
      className="bg-slate-800 py-2 px-8 border-b-4 border-slate-900 fixed w-full top-0 z-30"
      onMouseLeave={() => setHeaderVisible(false)}
    >
      <div className="w-full flex justify-between">
        <div className="sm:flex mt-1 half:flex-grow">
          <Autocomplete // items
            size="small"
            disableClearable
            color="#000"
            clearOnEscape
            options={itemsNames}
            value={heldItem}
            isOptionEqualToValue={(option, value) =>
              value ? option === value : true
            }
            onChange={(_, newValue) => {
              setHeldItems(newValue || "");
            }}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input
                  {...params.inputProps}
                  className="border-l-2 border-black rounded-l-md w-28 px-1"
                  type="text"
                  placeholder="Held item"
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleHeldItemInfo}
            color="black"
            size={24}
            className="p-1 hover:cursor-pointer rounded-r-md bg-white border-l-black border mr-1"
          ></FaSearch>
          {itemComponent && (
            <PokeHeldItem
              item={itemsFiltered[heldItemIndex]}
              onClose={handleHeldItemInfo}
            />
          )}

          <Autocomplete // moves
            size="small"
            disableClearable
            color="#000"
            clearOnEscape
            options={movesNames}
            value={moves}
            isOptionEqualToValue={(option, value) =>
              value ? option === value : true
            }
            onChange={(_, newValue) => {
              setMoves(newValue || "");
            }}
            renderInput={(params) => (
              <div className="rounded-full" ref={params.InputProps.ref}>
                <input
                  {...params.inputProps}
                  className="border-l-2 border-black rounded-l-md w-28 px-1"
                  type="text"
                  placeholder="Move"
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleMoveInfo}
            color="black"
            size={24}
            className="p-1 hover:cursor-pointer rounded-r-md bg-white border-l-black border mr-1"
          ></FaSearch>
          {moveComponent && (
            <PokeMove
              move={moveUnfiltered[movesFormated] as Move}
              onClose={handleMoveInfo}
            />
          )}

          <Autocomplete // ability
            size="small"
            disableClearable
            color="#000"
            clearOnEscape
            options={abilityNames}
            value={ability}
            isOptionEqualToValue={(option, value) =>
              value ? option === value : true
            }
            onChange={(_, newValue) => {
              setAbility(newValue || "");
            }}
            renderInput={(params) => (
              <div className="rounded-full" ref={params.InputProps.ref}>
                <input
                  {...params.inputProps}
                  className="border-l-2 border-black rounded-l-md w-28 px-1"
                  type="text"
                  placeholder="Ability"
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleAbilityInfo}
            color="black"
            size={24}
            className="p-1 hover:cursor-pointer rounded-r-md bg-white border-l-black border mr-1"
          ></FaSearch>
          {abilityComponent && (
            <PokeAbility
              ability={abilityFiltered[abilityIndex]}
              onClose={handleAbilityInfo}
            />
          )}
        </div>
        <div className="flex">
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
      </div>
      {headerVisible && (
        <div className="grid items-center justify-center px-1 gap-x-1 grid-cols-3 half:grid-cols-6 md:grid-cols-9 min-md:px-16 mt-2">
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
