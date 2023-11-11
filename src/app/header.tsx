"use client"

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { MdNotificationsNone,MdKeyboardArrowDown } from "react-icons/md";
 import { usePathname } from "next/navigation";

const Header = () => {
   const path=usePathname()
  return (
    <Box className="flex-1 sticky top-0 z-20 bg-white max-h-20 lg:max-h-24 px-12 flex justify-between items-center">
      {/* @ts-ignore */}
      <p className="text-3xl font-extrabold">{path.split('/').pop()?.trim().length === 0?"Dashboard":path?.split('/').pop()?.toString().charAt(0).toUpperCase() + path?.split('/').pop()?.toString()?.slice(1)}</p>
      <Box className="flex h-full  items-center justify-between min-w-fit">
        <Divider orientation="vertical" variant="middle" flexItem />
        
            <Box className="mx-7">

        <Badge color="error" variant="dot">
          <MdNotificationsNone size={34} className="opacity-80" />
        </Badge>
            </Box>
        <Box className="flex items-center justify-between gap-4">
          <p className="text-base font-semibold ">
            Hello,<span className="text-purple-400">Jacob</span>
          </p>
          <Box className="flex items-center justify-center gap-1">

          <Avatar
            alt="test-ui"
            src="https://w7.pngwing.com/pngs/89/405/png-transparent-computer-icons-user-organization-user-svg-black-avatar-user.png"
            sx={{ bgcolor: "#EDE5F4" ,width:31,height:31}}
          />
          <MdKeyboardArrowDown size={25} className="opacity-40 hover:opacity-100 transition-all duration-500"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );  
};

export default Header;
