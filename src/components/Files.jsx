import PuntosIcon from "../assets/puntos-icon.svg";
import OpenIcon from "../assets/open-icon.svg";

function Files() {
  return (
    <div className="bg-[#252525] w-72 px-5 py-2 border-solid border-r-[1px] border-[#cccccc33]">
      <div className="flex justify-between">
        <h3 className="text-[#CCCCCC] text-xs font-medium">EXPLORER</h3>
        <img src={PuntosIcon} alt="Puntos Icon" className="h-6" />
      </div>
      <div className="flex gap-2 items-center text-[#CCCCCC] text-xs font-semibold mt-2">
        <img src={OpenIcon} alt="Puntos Icon" className="w-3" />
        <h2>KOBOLSCRIPT-PRUEBAS</h2>
      </div>
      <div className="flex gap-2 items-center text-[#CCCCCC] text-xs font-medium ml-4 mt-2">
        <h3 className=" text-[#C9F3BA]">KS</h3>
        <h2>index.ks</h2>
      </div>
    </div>
  );
}

export default Files;
