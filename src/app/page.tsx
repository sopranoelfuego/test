import Box from "@mui/material/Box";
import FirstCharts from "./components/firstCharts";
import SecondCharts from "./components/secondCharts";
import { MdExpandMore, MdCalendarToday } from "react-icons/md";
import ThirdCharts from "./components/thirdCharts";

export default function Home() {
  return (
    <Box className=" box-border flex flex-1 mx-12  sm:max-h-[50rem] md:max-h-screen overflow-hidden">
      <Box className=" w-full   max-h-[50rem] overflow-y-auto ">
        <Box className=" w-full opacity-80 flex items-center justify-between">
          {/* right */}
          <Box className="flex items-center justify-center w-fit gap-4">
            <Box className="bg-white w-40 flex items-center justify-around border rounded-sm py-1 ">
              <p className="text-xs font-semibold">AGENT-0002</p>
              <MdExpandMore size={23} />
            </Box>
            <Box className="bg-white w-40 flex items-center justify-around border rounded-sm py-1 ">
              <p className="text-xs font-semibold">Store: All</p>
              <MdExpandMore size={23} />
            </Box>
          </Box>
          <Box className="bg-white px-4 w-fit  text-xs font-semibold flex items-center gap-2 justify-around border rounded-sm py-2">
            <MdCalendarToday size={18} />
            <p>Start Date</p>
            <p className="opacity-40">to</p>
            <p>End Date</p>
          </Box>

          {/* end right */}
        </Box>

        <FirstCharts />
        <SecondCharts />
        <ThirdCharts />
      </Box>
    </Box>
  );
}
