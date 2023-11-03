
import React from "react"
import Link from "next/link"

interface ITemProps{
    id?:number,
    icon:React.ReactNode,
    title:string,
    link:string
}

const SideBarItem=({id,icon,title,link}:ITemProps)=>{
    
    return(
        <Link href={link} className=" opacity-40 hover:opacity-100 transition-all duration-500 hover:text-purple-400 flex flex-col hover:cursor-pointer items-center justify-center gap-1 " >
            {icon}
            <p className="text-xs font-medium">{title}</p>

        </Link>
    )
}
export default SideBarItem