"use client";

import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { MdExpandMore, MdSupportAgent } from "react-icons/md";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const SecondCharts = () => {
  const options = {
    chart: {
      type: "area",
      stacked: false,
      height: 100,
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
      show: true,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetX: 0,
        formatter: function (val: number) {
          return val.toString() + "M";
        },
      },
    },
  };
  const series = [
    {
      name: "Sales",
      data: [4, 5, 8, 8, 6, 16],
    },
    {
      name: "Shora",
      data: [4, 5, 7, 8, 9, 16],
    },
    {
      name: "Agents",
      data: [4, 6, 9, 8, 6, 16],
    },
  ];
  const seriesDonut = [1012222, 200000, 1002001, 1200000, 100000];
  const donutOptions = {
    chart: {
      type: "donut",
      width: 200,
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
              label: "Total Sales",
              fontWeight: 600,
              formatter: function (w: any) {
                const sum = w?.globals?.seriesTotals?.reduce(
                  (a: number, b: number) => {
                    return a + b;
                  },
                  0
                );
                return new Intl.NumberFormat("en-IN").format(sum).toString()+" BIF";
              },
            },
          },
        },
      },
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
    <div className="w-full rounded-md max-h-[26rem] h-[26rem]  flex items-center px-0 justify-center overflow-hidden  bg-white">
      <div className="flex-[60] h-full  flex flex-col overflow-hidden p-6">
        <Box className="flex items-center  justify-between md:pr-8">
          <Box className="flex items-center gap-5 justify-center">
            <Box className="p-3 bg-orange-100 rounded-full">
              <MdSupportAgent size={32} className="text-orange-400" />
            </Box>
            <p className="font-semibold text-base">Sales Summary</p>
          </Box>
          <Box className="flex items-center justify-end gap-11 flex-1">
            <Box className="flex flex-col justify-end items-end">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-2 h-1 rounded-md bg-blue-600 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Sales</p>
              </div>
              <p className="font-semibold">
                8.2M
                <span className="text-xs font-normal opacity-70 ml-1">BIF</span>
              </p>
            </Box>
            <Box className="flex flex-col justify-end  items-end">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-2 h-1 rounded-md bg-green p-0 m-0"></div>
                <p className="opacity-70 text-sm">Shora</p>
              </div>
              <p className="font-semibold">
                6.1M
                <span className="text-xs font-normal opacity-70 ml-1">BIF</span>
              </p>
            </Box>
            <Box className="flex flex-col justify-end items-end">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-2 h-1 rounded-md bg-orange-400 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Agents</p>
              </div>
              <p className="font-semibold">
                5.4M
                <span className="text-xs font-normal opacity-70 ml-1">BIF</span>
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex-1  max-w-[56rem]">

        <ApexChart
          //   @ts-ignore
          options={options}
          series={series}
          type="area"
          height={250}
        />
        </Box>
      </div>

      <div className="h-56 w-[2px] relative bg-grey ">
        <div className="block absolute top-[50%] w-3 h-3 right[2px] rounded-full border-l-white bg-white border-2 border-solid z-10 border-gray-200"></div>
      </div>

      <Box className="flex-[40%] h-full  p-6">
        <Box className=" w-full gap-4 flex items-center justify-end">
          <p className="text-xs opacity-80 font-semibold">All Sales</p>
          <MdExpandMore size={21} />
        </Box>

        <Box className="flex w-full items-center justify-center gap-6 p-6 ">
          <Box className="">
            <ApexChart
              // @ts-ignore
              options={donutOptions}
              series={seriesDonut}
              type="donut"
              height={300}
            />
          </Box>

          <Box className="flex lg:gap-4 md:gap-1 h-full flex-col">
            <Box className="flex flex-col justify-end items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-blue-600 p-0 m-0"></div>
                <p className="opacity-70 text-sm">Water</p>
              </div>
              <p className="font-semibold">2,652,480 BIF</p>
            </Box>
            <Box className="flex flex-col justify-end  items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-[#FD8499] p-0 m-0"></div>
                <p className="opacity-70 text-base">Electricity</p>
              </div>
              <p className="text-base font-semibold">2,320,920 BIF</p>
            </Box>
            <Box className="flex flex-col justify-end  items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-[#AC96FE] p-0 m-0"></div>
                <p className="opacity-70 text-sm">Airtime</p>
              </div>
              <p className="font-semibold">1,320,920 BIF</p>
            </Box>
            <Box className="flex flex-col justify-end items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-[#FDE36C] p-0 m-0"></div>
                <p className="opacity-70 text-sm">Tv</p>
              </div>
              <p className="font-semibold">1,160,480 BIF</p>
            </Box>
            <Box className="flex flex-col justify-end items-start">
              <div className="flex items-center gap-2  justify-end">
                <div className="w-3 h-2 rounded-md bg-[#67FECA] p-0 m-0"></div>
                <p className="opacity-70 text-sm">Other Payments</p>
              </div>
              <p className="font-semibold">1,160,480 BIF</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default SecondCharts;
