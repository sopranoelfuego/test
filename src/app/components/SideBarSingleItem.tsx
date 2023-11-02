
import React from "react"
import Stack from "@mui/material/Stack"

interface ITemProps{
    id?:number,
    icon:React.ReactNode,
    title:string,
    link:string
}

const SideBarItem=({id,icon,title,link}:ITemProps)=>{
    
    return(
        <Stack className=" opacity-40 hover:opacity-100 transition-all duration-500 hover:text-purple-400 hover:cursor-pointer " alignItems="center" justifyContent="center" spacing="0.3rem">
            {icon}
            <p className="text-xs font-medium">{title}</p>

        </Stack>
    )
}
export default SideBarItem