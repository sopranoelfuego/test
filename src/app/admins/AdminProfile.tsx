"use client";
import React from "react";

import Divider from "@mui/material/Divider";
import AdminHeaderProfile from "./AdminProfiHeader";
import AdminProfileInfo from "./AdminProfileInfo";

function AdminProfile() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
//  w-full md:w-2/5  rounded-md overflow-y-auto  max-h-max md:max-h-[44rem] flex flex-col bg-white h-full
  return (
    <div className="flex-1 hidden sm:flex flex-col rounded-md overflow-y-auto  md:max-w-[70rem] sm:max-w-[100svw] h-full bg-white ">
      <AdminHeaderProfile />
      <Divider />
      <AdminProfileInfo />
    </div>
  );
}

export default AdminProfile;
