import { PokeToolTip } from "@/components/poke-tooltip";
import { useState } from "react";

interface ToolTipsState {
  hp: boolean;
  atk: boolean;
  def: boolean;
  spAtk: boolean;
  spDef: boolean;
  speed: boolean;
}

type PokeStatsProps = {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
};

export function PokeStats({ ...props }: PokeStatsProps) {
  const [toolTips, setToolTips] = useState<ToolTipsState>({
    hp: false,
    atk: false,
    def: false,
    spAtk: false,
    spDef: false,
    speed: false,
  });

  const handleToolTipToggle = (tooltip: keyof ToolTipsState) => {
    setToolTips((prevState) => ({
      ...prevState,
      [tooltip]: !prevState[tooltip],
    }));
  };

  function getStatusPercentage(status: number): number {
    return (status / 255) * 100;
  }

  return (
    <div className="w-full pl-2 pr-2 flex flex-col font-mono gap-0.5">
      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 text-nowrap overflow-hidden  text-sm bg-[#448F0C]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black">
          Hp
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#448F0C] w-full"
          onMouseOver={() => handleToolTipToggle("hp")}
          onMouseOut={() => handleToolTipToggle("hp")}
        >
          {toolTips.hp && <PokeToolTip label="Hp" value={props.hp} />}
          <div
            className="bg-[#69DC12] rounded-r-md border-r-[#306408] border-r-2 flex h-full"
            style={{
              width: `${getStatusPercentage(props.hp)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 overflow-hidden text-nowrap text-sm bg-[#c9aa11]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black">
          Atk
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#c9aa11] w-full"
          onMouseOver={() => handleToolTipToggle("atk")}
          onMouseOut={() => handleToolTipToggle("atk")}
        >
          {toolTips.atk && <PokeToolTip label="Atk" value={props.atk} />}
          <div
            className="bg-[#fed610] border-r-[#a38905] border-r-2 rounded-r-md flex h-full"
            style={{
              width: `${getStatusPercentage(props.atk)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 text-nowrap text-sm bg-[#F09A65]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black overflow-hidden">
          Def
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#F09A65] w-full"
          onMouseOver={() => handleToolTipToggle("def")}
          onMouseOut={() => handleToolTipToggle("def")}
        >
          {toolTips.def && <PokeToolTip label="Def" value={props.def} />}
          <div
            className="bg-[#E86412] border-r-[#a24b16] border-r-2 rounded-r-md flex h-full"
            style={{
              width: `${getStatusPercentage(props.def)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 text-nowrap text-sm bg-[#66D8F6]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black overflow-hidden">
          Satk
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#66D8F6] w-full"
          onMouseOver={() => handleToolTipToggle("spAtk")}
          onMouseOut={() => handleToolTipToggle("spAtk")}
        >
          {toolTips.spAtk && <PokeToolTip label="Sp.Atk" value={props.spAtk} />}
          <div
            className="bg-[#10a0c4] rounded-r-md border-r-[#0a6278] border-r-2 flex h-full"
            style={{
              width: `${getStatusPercentage(props.spAtk)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 text-nowrap text-sm bg-[#899EEA]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black overflow-hidden">
          Sdef
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#899EEA] w-full"
          onMouseOver={() => handleToolTipToggle("spDef")}
          onMouseOut={() => handleToolTipToggle("spDef")}
        >
          {toolTips.spDef && <PokeToolTip label="Sp.Def" value={props.spDef} />}
          <div
            className="bg-[#4960b0] rounded-r-md border-r-[#364374] border-r-2 flex h-full"
            style={{
              width: `${getStatusPercentage(props.spDef)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-md flex-row flex border-black border-2">
        <span className="w-14 text-nowrap text-sm bg-[#E46CCA]  pl-1 pr-1 rounded-l-md flex-auto border-r border-x-black overflow-hidden">
          Spd
        </span>
        <div
          className="rounded-md rounded-l-none bg-[#E46CCA] w-full"
          onMouseOver={() => handleToolTipToggle("speed")}
          onMouseOut={() => handleToolTipToggle("speed")}
        >
          {toolTips.speed && <PokeToolTip label="Speed" value={props.speed} />}
          <div
            className="bg-[#D51DAD] rounded-r-md border-r-[#8c1372] border-r-2 flex h-full"
            style={{
              width: `${getStatusPercentage(props.speed)}%`,
              minWidth: "1px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
