"use client";

import  Box  from "@mui/material/Box";
import dynamic from "next/dynamic";
import {MdSupportAgent} from "react-icons/md"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const FirstCharts = () => {

  const options = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        enabled: false,
      },
    
        
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    tooltip: {
      shared: true,
    },
     legend: {
                show:false
              },
     yaxis: {
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetX: 0,
                    formatter: function(val:number) {
                      return val.toString() + "hr";
                    },
                }
            }
  };
  const series = [
    {
      name: "Active",
      data: [2, 3, 4, 8, 1, 8],
    },
    {
      name: "Deactivated",
      data: [1, 3, 2, 8, 1, 3],
    },
    {
      name: "Inactive",
      data: [1, 2, 2, 8, 4, 3],
    },
  ];

  return (
    <div className="w-[60rem] overflow-hidden">
        <Box className="flex items-center justify-between">
            <Box>
                <Box>

                <MdSupportAgent/>
                </Box>
                <p>AGENT - AGENT-002</p>
            </Box>
            <Box>
                <Box>
             <div className="flex items-center justify-center">
                    <div className="w-2 h-1 bg-green"></div>
                        <p>Active</p>
             </div>
                    <p>7.3 hrs</p>
                </Box>
                
            </Box>
        </Box>
      <ApexChart
        //   @ts-ignore
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};
export default FirstCharts;
