import React from "react";
import { IADSingle } from "../components/adminsData";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { MdMoreVert, MdEdit } from "react-icons/md";

function AdminProfileInfo() {
  return (
    <div className="flex flex-1 p-6 gap-9 items-start  ">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <IconButton className="bg-white p-3 hover:bg-white shadow-lg">
            <MdEdit size={18} className="text-black" />
          </IconButton>
        }
      >
        <Avatar
          alt="Remy Sharp"
          src="will.jpg"
          sx={{ width: 120, height: 120 }}
        />
      </Badge>
      {/* ===== INFO BLOC HERE =================*/}
      <Box className="flex-1 mt-3">
        <Box className="w-full flex flex-col justify-between h-[7rem]">
            {/* tOP */}
            <Stack className="flex w-full" direction="row" alignItems="flex-start" justifyContent="space-between">
            <Box>
                <p className="text-3xl font-semibold">Gregory tran</p>
            <p className="opacity-80 text-lg">ADMIN-0020</p>
            </Box>
            <Box className="flex items-center gap-1 justify-center">
            <button className="text-sm font-semibold bg-purple-200 px-2 rounded-md p-1 text-purple-400">
                Edit Profile
            </button>
            <Box className=" rounded-md py-0 bg-purple-200">
                <MdMoreVert size={27}  className=" text-purple-400  transition-all duration-500 m-0 p-0"/>
            </Box>
            </Box>
            </Stack>
            {/* end top */}
            <Stack direction="row"  justifyContent="space-between">
              <p className="text-lg opacity-80">trans@Shora.co</p>
              <small className="opacity-50 text-sm font-semibold">joined: <span className="opacity-40 text-base">4 days ago.</span></small>
            </Stack>
        </Box>
      </Box>
      {/* ===== INFO BLOC HERE =================*/}
    </div>
  );
}

export default AdminProfileInfo;
