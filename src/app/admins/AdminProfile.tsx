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

  return (
    <div className="flex-1 flex flex-col rounded-md h-full bg-white ">
      <AdminHeaderProfile />
      <Divider />
      <AdminProfileInfo />
    </div>
  );
}

export default AdminProfile;
