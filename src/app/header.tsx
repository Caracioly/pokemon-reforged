import itemsNames from "@/utils/itemsNames.json";
import movesNames from "@/utils/movesNames.json";
import abilityNames from "@/utils/abilityNames.json";

import itemsFiltered from "@/utils/data/itemsFiltered.json";
import abilityFiltered from "@/utils/data/abilityFiltered.json";
import moveUnfiltered from "@/utils/data/movesUnfiltered.json";

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
import { HiMenuAlt2 } from "react-icons/hi";
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
  const [leftMenuVisible, setLeftMenuVisible] = useState(false);

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

  const movesFormated: keyof typeof moveUnfiltered = moves
    .replace(/\s/g, "")
    .toLowerCase() as keyof typeof moveUnfiltered;

  //className={`rounded-l-md w-28 px-1 bg-slate-900 text-white border-none ${isFocused ? "border border-blue-500" : ""

  return (
    <div
      className="bg-slate-800 py-2 px-8 border-b-4 border-slate-950 fixed w-full top-0 z-30 h-[52px]"
      onMouseLeave={() => setHeaderVisible(false)}
    >
      <div className="w-full flex justify-between">
        <HiMenuAlt2
          className="visible 2sm:hidden mt-1 hover:bg-slate-950 rounded-md"
          size={25}
          color="white"
          onClick={() => setLeftMenuVisible(!leftMenuVisible)}
        ></HiMenuAlt2>
        {leftMenuVisible && (
          <div className="bg-slate-800 rounded-md p-3 absolute left-2 top-14 flex-col flex gap-2 md:hidden z-40">
            <div className="flex flex-row">
              <Autocomplete
                sx={{
                  "& input:focus": {
                    outline: "none",
                  },
                }}
                size="small"
                disableClearable
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
                      className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                      type="text"
                      placeholder="Held item"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleHeldItemInfo();
                        }
                      }}
                    />
                  </div>
                )}
              />
              <FaSearch
                onClick={handleHeldItemInfo}
                color="white"
                size={28}
                className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
              ></FaSearch>
              {itemComponent && (
                <PokeHeldItem
                  item={itemsFiltered[heldItemIndex]}
                  onClose={handleHeldItemInfo}
                />
              )}
            </div>
            <div className="flex flex-row">
              <Autocomplete // moves
                sx={{
                  "& input:focus": {
                    outline: "none",
                  },
                }}
                size="small"
                disableClearable
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
                      className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                      type="text"
                      placeholder="Move"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleMoveInfo();
                        }
                      }}
                    />
                  </div>
                )}
              />
              <FaSearch
                onClick={handleMoveInfo}
                color="white"
                size={28}
                className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
              ></FaSearch>
              {moveComponent && (
                <PokeMove
                  move={moveUnfiltered[movesFormated] as Move}
                  onClose={handleMoveInfo}
                />
              )}
            </div>
            <div className="flex flex-row">
              <Autocomplete // ability
                sx={{
                  "& input:focus": {
                    outline: "none",
                  },
                }}
                size="small"
                disableClearable
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
                      className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                      type="text"
                      placeholder="Ability"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAbilityInfo();
                        }
                      }}
                    />
                  </div>
                )}
              />
              <FaSearch
                onClick={handleAbilityInfo}
                color="white"
                size={28}
                className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
              ></FaSearch>
              {abilityComponent && (
                <PokeAbility
                  ability={abilityFiltered[abilityIndex]}
                  onClose={handleAbilityInfo}
                />
              )}
            </div>
          </div>
        )}
        <div className="2sm:flex 2sm:visible mt-1 hidden">
          <Autocomplete
            sx={{
              "& input:focus": {
                outline: "none",
              },
            }}
            size="small"
            disableClearable
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
                  className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                  type="text"
                  placeholder="Held item"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleHeldItemInfo();
                    }
                  }}
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleHeldItemInfo}
            color="white"
            size={28}
            className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
          ></FaSearch>
          {itemComponent && (
            <PokeHeldItem
              item={itemsFiltered[heldItemIndex]}
              onClose={handleHeldItemInfo}
            />
          )}

          <Autocomplete // moves
            sx={{
              "& input:focus": {
                outline: "none",
              },
            }}
            size="small"
            disableClearable
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
                  className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                  type="text"
                  placeholder="Move"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleMoveInfo();
                    }
                  }}
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleMoveInfo}
            color="white"
            size={28}
            className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
          ></FaSearch>
          {moveComponent && (
            <PokeMove
              move={moveUnfiltered[movesFormated] as Move}
              onClose={handleMoveInfo}
            />
          )}

          <Autocomplete // ability
            sx={{
              "& input:focus": {
                outline: "none",
              },
            }}
            size="small"
            disableClearable
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
                  className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
                  type="text"
                  placeholder="Ability"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAbilityInfo();
                    }
                  }}
                />
              </div>
            )}
          />
          <FaSearch
            onClick={handleAbilityInfo}
            color="white"
            size={28}
            className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
            p-1"
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
        <div className="grid items-center justify-center px-1 gap-x-1 grid-cols-3 half:grid-cols-6 md:grid-cols-9 min-md:px-16 mt-3 bg-slate-800 rounded-x-md rounded-b-md p-4 border-b-4 border-x-4 border-slate-950 border-t-4">
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
