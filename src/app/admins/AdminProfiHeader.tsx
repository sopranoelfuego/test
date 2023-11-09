"use client";
import React from "react";

import Box from "@mui/material/Box";
import  IconButton  from "@mui/material/IconButton";
import {MdEdit,MdOutlineEmail,MdClose} from "react-icons/md"
function AdminHeaderProfile() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    
      <Box className="w-full h-20 mb-0  pb flex items-center px-6 justify-between">
        <Box
          sx={{
            
            display:"flex",
            paddingTop: "1.7rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "5rem",
          }}
        >

            <div className=" h-full  text-start text-lg  px-8 opacity-70" >Summary</div>
            <div className=" h-full border-b-2 text-start text-lg font-semibold px-8 border-b-yellow" >Profile</div>
        
        </Box>
        <Box className="flex items-center gap-2 justify-center">
          <IconButton className="bg-grey">
            <MdEdit size={18} className="text-black"/>
          </IconButton>
          <IconButton className="bg-grey">
            <MdOutlineEmail size={18} className="text-black"/>
          </IconButton >
          <MdClose size={20}/>
    

        </Box>
      </Box>

    
  );
}

export default AdminHeaderProfile;
