import React from "react";
import HeaderSearchAdmin from "./HeaderSearchAdmin";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import adminsData from "../components/adminsData";
import SingleAdmin from "./SingleAdmin";

function ListOfAdmins() {
  return (
    <div className="w-2/5  rounded-md overflow-y-hidden max-w-[33rem] max-h-[44rem] flex flex-col bg-white h-full">
      <HeaderSearchAdmin />
      <Box className="  flex-1">
        {adminsData.map((ad) => (
          <div key={ad.id}>
            <SingleAdmin admin={ad} />
            <Divider variant="middle" />
          </div>
        ))}
      </Box>
    
    </div>
  );
}

export default ListOfAdmins;
