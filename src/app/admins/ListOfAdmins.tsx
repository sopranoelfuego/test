import React from "react";
import HeaderSearchAdmin from "./HeaderSearchAdmin";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import adminsData from "../utils/adminsData";
import SingleAdmin from "./SingleAdmin";

function ListOfAdmins() {
  return (
    <div className="w-2/5  rounded-md overflow-y-auto max-w-[33rem] max-h-[44rem] flex flex-col bg-white h-full">
      <HeaderSearchAdmin />
      
        {adminsData.map((ad) => (
          <Box key={ad.id}>
            <SingleAdmin admin={ad} />
            <Divider variant="middle" />
          </Box>
        ))}
      
    
    </div>
  );
}

export default ListOfAdmins;
