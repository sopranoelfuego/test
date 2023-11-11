"use client";
import React from "react";
import { IADSingle } from "../utils/adminsData";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import {
  MdMoreVert,
  MdCheckCircle,
  MdClose,
  MdMoreHoriz,
} from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import Link from 'next/link'
interface IProps {
  admin: IADSingle;
}

const SingleAdmin = ({ admin }: IProps): React.ReactNode => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={`w-full z-1 hover:bg-purple-200  relative transition-all duration-500  px-9 py-2 gap-6 flex items-center justify-between `}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          admin.id === 4 ? (
            <MdClose
              className="text-white bg-red rounded-full z-10"
              size={18}
            />
          ) : admin.id === 6 ? (
            <MdMoreHoriz
              className="text-white bg-yellow rounded-full z-10"
              size={18}
            />
          ) : (
            <MdCheckCircle
              className="text-green bg-white rounded-full z-10"
              size={18}
            />
          )
        }
        className="z-0"
      >
        <Avatar
          alt="Remy Sharp"
          src={admin.src}
          sx={{ width: 65, height: 65 }}
          className="z-0"
        />
      </Badge>
  
      <Box className="flex-1 w-full flex items-start justify-between">
        <div>
          <Link href={`/admins/${admin.id}`} className="text-lg">{admin.name}</Link>
          <p className="opacity-50 text-sm">{admin.role}</p>
        </div>
        <small className="opacity-50">{admin.time}</small>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
          <MenuItem onClick={handleClose}>De-activate</MenuItem>
          <MenuItem onClick={handleClose} className="text-red">
            Delete
          </MenuItem>
        </Menu>
      </Box>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MdMoreVert
          size={30}
          className="opacity-50 hover:opacity-100 transition-all duration-500 m-0 p-0"
        />
      </IconButton>
    </Box>
  );
};

export default SingleAdmin;
