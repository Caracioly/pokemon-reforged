// import { PokeStats } from "./poke-stats";
// import { PokeType } from "./poke-type";
// import { FaWeightHanging } from "react-icons/fa";
// import { MdHeight } from "react-icons/md";

// type PokeProps = {
//   pokemonSprite: string;
// };

// export function PokeBox({ pokemonSprite }: PokeProps) {
//   return (
//     <div className="p-3 w-full bg-gradient-to-b from-[#91A119] to-[#81B9EF] border-8 rounded-md border-black grid grid-cols-4 gap-1">
//       <div className="flex flex-col w-full justify-center items-center">
//         <input
//           className="rounded-md border-2 mb-1 p-0.5 text-center border-black w-24 drop-shadow-md shadow-sm shadow-black"
//           type="text"
//           defaultValue="Poke Name"
//         />
//         <div className="bg-black/30 border-2 mb-1 border-black rounded-full drop-shadow-xlshadow-md shadow-lg shadow-black">
//           <img className="size-28 ml-4" src={pokemonSprite} alt="Pokemon" />
//         </div>
//         <div className="">
//           <PokeType pokemonType="bug" />
//           <PokeType pokemonType="flying" />
//         </div>
//       </div>

//       <div className="flex flex-col w-full items-center justify-around">
//         <div className="flex w-full justify-center">
//           <FaWeightHanging size={20} className="drop-shadow-md" />
//           <span className="ml-1.5">12kg</span>

//           <MdHeight size={23} className="drop-shadow-md" />
//           <span className="">0.8m</span>
//         </div>
//         {/* <PokeStats /> */}
//       </div>

//       <div className="flex flex-col w-full justify-center items-center font-mono gap-y-1">
//         <div className="text-center bg-yellow-500/90 p-0.5 rounded-md border-2 border-black w-full">
//           <span className="w-full text-center">Damage 4x</span>
//           <div className="grid grid-cols-2 w-full">
//             <PokeType pokemonType="rock" />
//           </div>
//         </div>
//         <div className="text-center bg-orange-500/90 p-0.5 rounded-md border-2 border-black w-full">
//           <span>Damage 2x</span>
//           <div className="grid grid-cols-2 w-full justify-center">
//             <PokeType pokemonType="fire" />
//             <PokeType pokemonType="electric" />
//             <PokeType pokemonType="flying" />
//             <PokeType pokemonType="ice" />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col w-full justify-center items-center font-mono gap-y-1">
//         <div className="text-center bg-fuchsia-900/50 p-0.5 rounded-md border-2 border-black w-full">
//           <span className="w-full text-center">Damage 0.5x</span>
//           <div className="grid grid-cols-2 w-full">
//             <PokeType pokemonType="bug" />
//           </div>
//         </div>

//         <div className="text-center bg-red-900/50 p-0.5 rounded-md border-2 border-black w-full">
//           <span>Damage 0.25x</span>
//           <div className="grid grid-cols-2 w-full">
//             <PokeType pokemonType="grass" />
//             <PokeType pokemonType="fighting" />
//           </div>
//         </div>
//         <div className="text-center bg-black/50 p-0.5 rounded-md border-2 border-black w-full">
//           <span className="w-full text-center font-bold ">Imune</span>
//           <div className="grid grid-cols-2 w-full">
//             <PokeType pokemonType="ground" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
