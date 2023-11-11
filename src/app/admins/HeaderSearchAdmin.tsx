import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import React from "react";
import {
  MdSearch,
  MdOutlineSettingsInputComponent,
  MdAddCircle,
} from "react-icons/md";

function HeaderSearchAdmin() {
  return (
    <Box className="sticky top-0 z-10">
      <div className=" w-full h-20  bg-white p-3 ">
        <Box className="w-full flex px-6 gap-4 items-center justify-center">
          <div className="bg-grey flex-1 flex text-xl w-full  opacity-70 items-center px-5 py-2 gap-4 rounded-lg justify-center">
            <MdSearch size={25} className="opacity-70" />
            <input
              className="bg-transparent flex-1 outline-none"
              placeholder="Search"
            />
          </div>
          <Box className=" w-fit flex items-center lg:gap-4 gap-2">
            <MdOutlineSettingsInputComponent
              size={30}
              className="text-purple-400 text-5xl"
            />
            <MdAddCircle size={49} className="text-purple-400" />
          </Box>
        </Box>
      </div>
      <Divider />
    </Box>
  );
}

export default HeaderSearchAdmin;
