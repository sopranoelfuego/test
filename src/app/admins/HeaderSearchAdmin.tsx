import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import {
  MdSearch,
  MdOutlineSettingsInputComponent,
  MdAddCircle,
} from "react-icons/md";

function HeaderSearchAdmin() {
  return (
    <>
      <div className=" w-full h-20 bg-white p-3 ">
        <Box className="w-full flex px-6 gap-4 items-center justify-center">
          <div className="bg-grey flex-1 flex text-xl  opacity-70 items-center px-5 py-3 gap-4 rounded-lg justify-center">
            <MdSearch size={25} className="opacity-70" />
            <input
              className="bg-transparent flex-1 outline-none"
              placeholder="Search"
            />
          </div> 
          <MdOutlineSettingsInputComponent
            size={30}
            className="text-purple-400"
          />
          <MdAddCircle size={49} className="text-purple-400" />
        </Box>
      </div>
      <Divider  />
    </>
  );
}

export default HeaderSearchAdmin;
