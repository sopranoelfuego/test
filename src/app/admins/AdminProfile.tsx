import React from "react";

import Divider from "@mui/material/Divider";
import AdminHeaderProfile from "./AdminProfiHeader";
import AdminProfileInfo from "./AdminProfileInfo";

function AdminProfile() {
  
  return (
    <div className="flex-1 hidden sm:flex flex-col rounded-md overflow-y-auto  md:max-w-[70rem] sm:max-w-[100svw] h-full bg-white ">
      <AdminHeaderProfile />
      <Divider />
      <AdminProfileInfo />
    </div>
  );
}

export default AdminProfile;
