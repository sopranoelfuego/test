import React from "react"
import { IADSingle } from "../components/adminsData";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { MdMoreVert, MdCheckCircle,MdClose,MdMoreHoriz } from "react-icons/md";

interface IProps {
  admin: IADSingle;
}
const SingleAdmin=({ admin }: IProps):React.ReactNode => {

  return (
    <Box className={`w-full hover:bg-purple-200 ${admin.id ===1 && `bg-purple-200`} relative transition-all duration-500  px-9 py-2 gap-6 flex items-center justify-between `}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={admin.id===4? <MdClose className="text-white bg-red rounded-full z-10" size={18} />:admin.id === 6?<MdMoreHoriz className="text-white bg-yellow rounded-full z-10" size={18} />:<MdCheckCircle className="text-green bg-white rounded-full z-10" size={18} />}
         
          sx={{zIndex:"10"}}
        >
          <Avatar
            alt="Remy Sharp"
            src={admin.src}
            sx={{ width: 65, height: 65 }}
          />
        </Badge>
        <Box className="flex-1 w-full  flex items-start justify-between">
            <div >

            <p className="text-lg">{admin.name}</p>
            <p className="opacity-50 text-sm">{admin.role}</p>
            </div>
            <small className="opacity-50">{admin.time}</small>
            {
                admin.id === 4 && (

            <div className="absolute bottom-9 p-4 bg-white z-20  shadow-xl rounded-lg right-8">
                <Box className=" absolute right-3 bottom-44 border-solid shadow-xl   bg-green">
                    
                </Box>
                <ul className="text-lg opacity-80 px-6  hover:cursor-pointer ">
                    <li className="text-lg  pt-1 pb-2 hover:cursor-pointer">Edit Profile</li>
                    <li className="text-lg  py-2 hover:cursor-pointer">De-activate</li>
                    <li  className="text-lg text-red pt-2 pb-1 hover:cursor-pointer">Delete</li>
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
