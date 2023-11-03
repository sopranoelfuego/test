
"use client"
import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function AdminProfile() {
   const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='flex-1 flex rounded-md h-full bg-white'>

       <Box sx={{ flex:1,paddingTop:"1.7rem",alignItems:"flex-end",justifyContent:"space-between" ,height:'5rem'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
    <Box>
      button
    </Box>
    </div>
  )
}

export default AdminProfile





