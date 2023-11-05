import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { MdNotificationsNone,MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  return (
    <Box className="flex-1 bg-white max-h-24 px-12 flex justify-between items-center">
      <p className="text-3xl font-extrabold">Admins</p>
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
