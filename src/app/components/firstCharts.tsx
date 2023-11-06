"use client";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { MdSupportAgent } from "react-icons/md";
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
      show: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetX: 0,
        formatter: function (val: number) {
          return val.toString() + "hr";
        },
      },
    },
  };
  const series = [
    {
      name: "Active",
      data: [2, 3, 4, 8, 1, 8],
    },
    {
      name: "Deactivated",
      data: [1, 2, 2, 1, 1, 2],
    },
    {
      name: "Inactive",
      data: [1, 0, 1, 2, 1, 1],
    },
  ];
  const seriesDonut = [9, 0, 0.5];
  const donutOptions = {
    chart: {
      type: "donut",
      width:200,
    },
    legend: {
      show: false,
    },
     plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        showAlways: true,
                        show: true,
                           label: 'Total Active hrs',
                         fontWeight: 600,
                      }
                    }
                  }
                }
              },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="w-full rounded-md max-h-[26rem]  my-4 flex items-center justify-evenly overflow-hidden pt-4 bg-white">
      <div className="w-[60rem]  overflow-hidden p-6">
        <Box className="flex items-center justify-between">
          <Box className="flex items-center gap-5 justify-center">
            <Box className="p-3 bg-orange-100 rounded-full">
              <MdSupportAgent size={32} className="text-orange-400" />
            </Box>
            <p className="font-semibold text-base">Agent - AGENT-002</p>
          </Box>
          <Box className="flex items-center justify-end gap-11 flex-1">
            <Box className="flex flex-col justify-end items-end">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-2 h-1 rounded-md bg-blue-600 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Active</p>
              </div>
              <p className="font-semibold">7.3 hrs</p>
            </Box>
            <Box className="flex flex-col justify-end  items-end">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-2 h-1 rounded-md bg-green p-0 m-0"></div>
                <p className="opacity-70 text-sm">Deactivated</p>
              </div>
              <p className="font-semibold">0 hr</p>
            </Box>
            <Box className="flex flex-col justify-end items-end">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-2 h-1 rounded-md bg-orange-400 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Inactive</p>
              </div>
              <p className="font-semibold">0 </p>
            </Box>
          </Box>
        </Box>
        <ApexChart
          //   @ts-ignore
          options={options}
          series={series}
          type="area"
          height={200}
        />
      </div>
      
      <div className="h-56 w-[2px] relative bg-grey " >
      <div className="block absolute top-[50%] w-3 h-3 right[2px] rounded-full border-l-white bg-white border-2 border-solid z-10 border-gray-200"></div>

      </div>
      
      
      <Box className="flex items-center ">

      <Box className=" w-[26rem]">
        <ApexChart
          // @ts-ignore
          options={donutOptions}
          series={seriesDonut}
          type="donut"
          height={300}
          />
      </Box>
      <Box className="flex items-start flex-col justify-start gap-4 flex-1">
            <Box className="flex flex-col justify-end items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-blue-600 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Active</p>
              </div>
              <p className="font-semibold">7.3 hrs</p>
            </Box>
            <Box className="flex flex-col justify-end  items-start">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-3 h-2 rounded-md bg-green p-0 m-0"></div>
                <p className="opacity-70 text-sm">Deactivated</p>
              </div>
              <p className="font-semibold">0 hr</p>
            </Box>
            <Box className="flex flex-col justify-end items-start">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-3 h-2 rounded-md bg-orange-400 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Inactive</p>
              </div>
              <p className="font-semibold">0 hr</p>
            </Box>
          </Box>
          </Box>
    </div>
  );
};
export default FirstCharts;
