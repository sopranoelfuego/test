"use client";
import Box from "@mui/material/Box";

import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <Box
      className={`h-20 w-full border flex border-t-2  items-center  justify-start px-12 mr-1 border-box`}
    >
      <Box className="w-full flex items-center text-base opacity-80 justify-start gap-2   ">
        <p>&copy; 2020 Shora</p>
        <p>|</p>
        <p> All rights reserved.</p>
      </Box>
    </Box>
  );
};

export default Footer;
