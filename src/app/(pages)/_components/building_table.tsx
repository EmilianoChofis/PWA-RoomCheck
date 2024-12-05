import { Building } from "@/app/types/Building";
import Title from "@/app/_components/title";
import { ApartmentOutlined } from "@mui/icons-material";
import { BuildingDashboard } from "@/app/types/BuildingDashboard";
import Link from "next/link";

const BuildingTable = ({ buildings, onClick }: { buildings: BuildingDashboard[]; onClick: (building: Building) => void }) => {
  return (
    <div className="table-container">
      <Title className="text-2xl text-primary" title="Lista de edificios" />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm border-b border-gray-200 font-[family-name:var(--font-jost-bold)]">
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4 w-[250px] md:w-[200px] lg:w-[300px]">
              Edificio
            </th>
            <th className="py-3 px-4">Habitaciones limpias</th>
            <th className="py-3 px-4">Habitaciones sin limpiar</th>
            <th className="py-3 px-4">Habitaciones reportadas</th>
            <th className="py-3 px-4">Habitaciones deshabilitadas</th>
            <th className="py-3 px-4">Total de habitaciones</th>
          </tr>
        </thead>
        <tbody className="text-primary">
          {Array.isArray(buildings) && buildings.map((buildingDash: BuildingDashboard, index) => (
            <tr
              key={buildingDash.building.id}
              className="border-b border-gray-200 hover:bg-gray-200 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => onClick(buildingDash.building)}
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4 flex items-center gap-2 text-primary font-[family-name:var(--font-jost-medium)]">
                <button className="p-2 bg-primary rounded-full">
                  <ApartmentOutlined className="text-background" />
                </button>
                <Link href={`/receptionist/home/building`} className="hover:underline">
                  {buildingDash.building.name}
                </Link>
              </td>
              <td className="py-3 px-4">{buildingDash.cleanedRooms}</td>
              <td className="py-3 px-4">{buildingDash.dirtyRooms}</td>
              <td className="py-3 px-4 text-warning">{buildingDash.reportedRooms}</td>
              <td className="py-3 px-4 text-error">{buildingDash.disabledRooms}</td>
              <td className="py-3 px-4 font-[family-name:var(--font-jost-medium)]">{buildingDash.totalRooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuildingTable;
