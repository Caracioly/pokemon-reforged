import { FaWeightHanging } from "react-icons/fa";
import { MdHeight } from "react-icons/md";

interface PokeDetailsProps{
    selectedPokemonHeight: number;
    selectedPokemonWeight: number;
}

export function PokeDetails({selectedPokemonHeight, selectedPokemonWeight}: PokeDetailsProps) {
  return (
    <div className="flex justify-center">
      <FaWeightHanging size={20} className="drop-shadow-md" />
      <span className="ml-1.5">{selectedPokemonWeight}kg</span>

      <MdHeight size={23} className="drop-shadow-md" />
      <span className="">{selectedPokemonHeight}m</span>
    </div>
  );
}
