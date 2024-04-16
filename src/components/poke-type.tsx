import { FaDragon, FaFire, FaGhost, FaQuestion } from "react-icons/fa";
import {
  GiDeathSkull,
  GiFluffyWing,
  GiPunch,
  GiStoneBlock,
  GiAzulFlake,
  GiFairyWand,
} from "react-icons/gi";
import { IoBug, IoWater } from "react-icons/io5";
import {
  MdGrass,
  MdDarkMode,
  MdOutlineElectricBolt,
  MdTerrain,
} from "react-icons/md";
import { PiSpiralFill } from "react-icons/pi";
import { SiStellar } from "react-icons/si";
import { FaDotCircle } from "react-icons/fa";
import { BsFillNutFill } from "react-icons/bs";
import { PokemonType } from "@/types/types";

type PokeTypeProps = {
  pokemonType: PokemonType;
};

export const typeColors = {
  bug: "#91A119",
  water: "#2980EF",
  grass: "#3FA129",
  dark: "#5A5366",
  dragon: "#5060E1",
  electric: "#F3D23B",
  fairy: "#EF70EF",
  psychic: "#EF4179",
  fighting: "#FF8000",
  fire: "#E72324",
  flying: "#81B9EF",
  ghost: "#704170",
  poison: "#994DCF",
  ground: "#AB7939",
  rock: "#938752",
  ice: "#42BFFF",
  normal: "#9099A1",
  steel: "#A6A9C5",
  stellar: "#FFFFFF",
  undefined: "#FFFFFF",
};

const typeIcons: Record<keyof typeof typeColors, JSX.Element> = {
  bug: <IoBug className="self-center" size={14} />,
  water: <IoWater className="self-center" size={14} />,
  grass: <MdGrass className="self-center" size={14} />,
  dark: <MdDarkMode className="self-center" size={14} />,
  dragon: <FaDragon className="self-center" size={14} />,
  electric: <MdOutlineElectricBolt className="self-center" size={14} />,
  fairy: <GiFairyWand className="self-center" size={14} />,
  psychic: <PiSpiralFill className="self-center" size={14} />,
  fighting: <GiPunch className="self-center" size={14} />,
  fire: <FaFire className="self-center" size={14} />,
  flying: <GiFluffyWing className="self-center" size={14} />,
  ghost: <FaGhost className="self-center" size={14} />,
  poison: <GiDeathSkull className="self-center" size={14} />,
  ground: <MdTerrain className="self-center" size={14} />,
  rock: <GiStoneBlock className="self-center" size={14} />,
  ice: <GiAzulFlake className="self-center" size={14} />,
  normal: <FaDotCircle className="self-center" size={14} />,
  steel: <BsFillNutFill className="self-center" size={14} />,
  stellar: <SiStellar className="self-center" size={14} />,
  undefined: <FaQuestion className="self-center" size={14} />,
};

export function PokeType({ pokemonType }: PokeTypeProps) {
  return (
    <>
      {pokemonType && (
        <div
          style={{ backgroundColor: typeColors[pokemonType] }}
          className="flex font-mono rounded-md mt-1 border-2 border-black drop-shadow-md px-1 justify-between  "
        >
          {typeIcons[pokemonType]}
          <span className="text-[70%] text-clip overflow-hidden ml-1 text-nowrap">
            {pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}
          </span>
        </div>
      )}
    </>
  );
}
