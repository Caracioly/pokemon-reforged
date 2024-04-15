import { useEffect } from "react";
import { FaX } from "react-icons/fa6";
import { PokeType } from "./poke-type";
import { PokemonType } from "@/types/types";

export type Item = {
  name: string;
  desc: string;
};

type PokeHeldItemProps = {
  item: Item;
  onClose: () => void;
};

export type Ability = {
  name: string;
  desc: string;
};

type PokeAbilityProps = {
  ability: Ability;
  onClose: () => void;
};

export type Move = {
  name: string;
  num: number;
  accuracy: number;
  basePower: number;
  category: string;
  pp: number;
  priority: number;
  desc: string;
  type: string;
};

type PokeMoveProps = {
  move: Move;
  onClose: () => void;
};

function PokeHeldItem({ item, onClose }: PokeHeldItemProps) {
  const name = item?.name;
  const desc = item?.desc;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleCloseCLick = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative bg-slate-700/90 border-slate-950 border-2 rounded-md p-4 text-white">
        <FaX
          className="absolute end-0 top-0 mt-2 mr-2 hover:cursor-pointer"
          onClick={handleCloseCLick}
        ></FaX>
        <div className="text-center">
          <span>{name || "Item not found"}</span>
        </div>
        <div className="text-center">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}

function PokeAbility({ ability, onClose }: PokeAbilityProps) {
  const name = ability?.name;
  const desc = ability?.desc;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleCloseCLick = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative bg-slate-700/90 border-slate-950 border-2 rounded-md p-4 text-white">
        <FaX
          className="absolute end-0 top-0 mt-2 mr-2 hover:cursor-pointer"
          onClick={handleCloseCLick}
        ></FaX>
        <div className="text-center">
          <span>{name || "Ability not found"}</span>
        </div>
        <div className="text-center">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}

function PokeMove({ move, onClose }: PokeMoveProps) {
  const name = move?.name;
  const desc = move?.desc;
  const basePower = move?.basePower;
  const category = move?.category;
  const pp = move?.pp;
  const priority = move?.priority;
  const type = move?.type;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleCloseCLick = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative bg-slate-700/90 border-slate-950 border-2 rounded-md p-4 text-white">
        <FaX
          className="absolute end-0 top-0 mt-2 mr-2 hover:cursor-pointer"
          onClick={handleCloseCLick}
        ></FaX>
        <div className="text-center flex flex-row justify-center gap-2">
          <span>{name}</span>
          <PokeType pokemonType={type.toLowerCase() as PokemonType} />
        </div>
        <div className="text-center">
          <span>{desc}</span>
        </div>
        <div className="text-center">
          <span>Damage: {basePower} / {category}</span>
        </div>
        <div className="text-center">
          <span>PP: {pp}</span>
        </div>
        <div className="text-center">
          <span>{`Priority: ${priority}`}</span>
        </div>
      </div>
    </div>
  );
}

export { PokeAbility, PokeHeldItem, PokeMove };
