import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import TableCell  from '@mui/material/TableCell';
// import { styled } from '@mui/material/styles';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, tableCellClasses } from "@mui/material";

import {
  MdBrightnessHigh,
  MdDoneAll,
  MdSafetyCheck,
  MdExpandMore,
} from "react-icons/md";

const agentData:{
  id:number,
  ranking:number,
  situation:"up" | "down",
  agent:string,
  transaction:number,
  completion:number,
  sales:number
}[]=[
  {id:1,
  ranking:80,
  situation:"up",
  agent:"AGENT-0080",
  transaction:92,
  completion:81,
  sales:26040
},
  {id:2,
  ranking:81,
  situation:"down",
  agent:"AGENT-0403",
  transaction:92,
  completion:81,
  sales:22000
},
  {id:3,
  ranking:82,
  situation:"up",
  agent:"AGENT-0002",
  transaction:92,
  completion:81,
  sales:25040
}
]



export const AgentsTable=()=>{


  return(
    <Table className="w-full">
       <TableHead className="bg-gray-200 p-0">
         <TableRow className="p-0">
            <TableCell>Ranking</TableCell>
            <TableCell align="left">Agent</TableCell>
            <TableCell align="left">Transactions</TableCell>
            <TableCell align="left">Completion Rate</TableCell>
            <TableCell align="right">Sales</TableCell>
          </TableRow>
       </TableHead>
        <TableBody>
          {agentData?.map(a=>(
          <TableRow key={a.id}  className="hover:bg-orange-200   transition-all duration-[400ms] font-600 border-none">
            <TableCell sx={{fontWeight:"700"}} >
              <Stack direction="row">
              <p className="border w-8 h-8 flex bg-inherit items-center justify-center my-auto rounded-full">{a.ranking}</p>

              </Stack>
              </TableCell>
            <TableCell sx={{fontWeight:"700"}} align="left">{a.agent}</TableCell>
            <TableCell sx={{fontWeight:"700"}} align="left">{a.transaction}</TableCell>
            <TableCell sx={{fontWeight:"700"}} align="left">{a.completion?.toString()+"%"}</TableCell>
            <TableCell sx={{fontWeight:"700"}} align="right">{new Intl.NumberFormat("en-IN").format(a.sales) }<span className="opacity-60 ml-1">BIF</span></TableCell>
          </TableRow>))}
        </TableBody>
    </Table>
  )
}

const ThirdCharts = () => {
  return (
    <Box className="min-h-[26rem] mt-4 h-[26rem] flex gap-6  ">
      {/* LEFT */}
      <Box className="w-[34rem] h-full flex flex-col gap-3  rounded-md bg-white p-6">
        <Box className="flex  gap-5   items-start justify-start">
          <Box className="p-3 bg-orange-100 rounded-full">
            <MdBrightnessHigh size={25} className="text-orange-400" />
          </Box>
          <Box className="mt-3 flex  flex-1 flex-col gap-4">
            <p className="font-semibold text-base">
              Terminals
              <br />
            </p>
            <p className="text-4xl font-semibold">
              8,032 <span className="opacity-70 text-sm">Total Terminals</span>
            </p>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box className=" mr-5 w-full py-4 flex justify-center items-center gap-2">
          <Box className="w-[5rem] h-[5rem] relative border-4 border-green flex items-center justify-center rounded-full">
            <Box className="bg-white absolute rounded-t-[1rem] rounded-l-[1rem] rotate-45 top-0 left-[9px] h-4 w-1"></Box>
            <MdDoneAll className="text-green" size={26} />
          </Box>
          <p className="text-2xl h-fit font-semibold">
            7,630 <span className="opacity-50 text-lg">(95%)</span> <br />
            <span className="opacity-50 text-sm">Activated Terminals</span>
          </p>
        </Box>
        <Divider variant="middle" />
        <Box className="  w-full flex py-4 justify-center items-center gap-2">
          <Box className="w-[5rem] h-[5rem] relative border-4 border-orange-400 flex items-center justify-center rounded-full">
            <Box className="bg-white absolute rounded-t-[1rem] rounded-l-[1rem] rotate-45 top-0 left-[9px] h-4 w-1"></Box>
            <MdDoneAll className="text-orange-400" size={26} />
          </Box>
          <p className="text-2xl h-fit font-semibold">
            7,630 <span className="opacity-50 text-lg">(95%)</span> <br />
            <span className="opacity-50 text-sm">Activated Terminals</span>
          </p>
        </Box>

      </Box>
      {/* END LEFT */}
      {/* RIGHT */}
      <Box className="flex-1 h-full rounded-md bg-white p-6">
        {/* HEAD */}
        <Box className="w-full flex items-center justify-between">
          <Box className="flex items-center gap-5 justify-center">
            <Box className="p-3 bg-orange-100 rounded-full">
              <MdSafetyCheck size={32} className="text-orange-400" />
            </Box>
            <p className="font-semibold text-base">Leaderboard</p>
          </Box>
          <Box className=" w-full gap-4 flex items-center justify-end   pr-4 ">
            <p className="text-xs opacity-80 font-semibold">Agents</p>
            <MdExpandMore size={21} />
          </Box>
        </Box>
        {/* END HEAD */}
        <AgentsTable/>
      </Box>
      {/* END RIGHT */}
    </Box>
  );
};

export default ThirdCharts;
