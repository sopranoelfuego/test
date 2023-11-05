"use client";

import Box from "@mui/material/Box";
import FirstCharts from "./components/firstCharts";

export default function Home() {

  return (
    <Box className=" box-border flex flex-1 mx-12  max-h-[44rem] overflow-hidden bg-white">

      <FirstCharts/>
    </Box>
  );
}
