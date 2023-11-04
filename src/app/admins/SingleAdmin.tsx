import React,{useState} from "react"
import { IADSingle } from "../components/adminsData";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { MdMoreVert, MdCheckCircle } from "react-icons/md";

interface IProps {
  admin: IADSingle;
}
function SingleAdmin({ admin }: IProps) {
  
  return (
    <Box className="w-full hover:bg-purple-200 relative transition-all duration-500  px-9 py-3 gap-4 flex items-center justify-between">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<MdCheckCircle className="text-green" size={23} />}
        >
          <Avatar
            alt="Remy Sharp"
            src={admin.src}
            sx={{ width: 60, height: 60 }}
          />
        </Badge>
        <Box className="flex-1 w-full  flex items-start justify-between">
            <div >

            <p>{admin.name}</p>
            <p className="opacity-50 text-sm">{admin.role}</p>
            </div>
            <small className="opacity-50">{admin.time}</small>
            {
                admin.id === 4 && (

            <div className="absolute bottom-9 p-4 bg-white z-20  shadow-xl rounded-lg right-8">
                <Box className=" absolute right-3 bottom-44 border-solid shadow-xl   bg-green">
                    
                </Box>
                <ul className="text-lg opacity-80 px-4  hover:cursor-pointer ">
                    <li className="text-lg  pt-1 pb-2 hover:cursor-pointer">Edit Profile</li>
                    <li className="text-lg  py-2 hover:cursor-pointer">De-activate</li>
                    <li style={{color:"red"}} className="text-lg pt-2 pb-1 hover:cursor-pointer">Delete</li>
                </ul>
            </div>
                )
            }
        </Box>
        <MdMoreVert size={30}  className="opacity-50 hover:opacity-100 transition-all duration-500 m-0 p-0"/>
      </Box>
  );
}

export default SingleAdmin;
