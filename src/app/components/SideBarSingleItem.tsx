"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface ITemProps {
  id?: number;
  icon: React.ReactNode;
  title: string;
  link: string;
}

const SideBarItem = ({ icon, title, link }: ITemProps) => {
  const path = usePathname();

  return (
    <Link
      href={link}
      className={`hover:opacity-100  transition-all  duration-500 hover:text-purple-400  ${
        path.split("/")?.pop()?.trim()?.toLowerCase() ===
        title?.trim().toLowerCase()
          ? "text-purple-400 opacity-100"
          : "text-inherit opacity-40"
      }  flex flex-col hover:cursor-pointer items-center justify-center gap-1 `}
    >
      {icon}
      <p className="text-xs font-medium">
        {title?.trim() === "" ? "Dashboard" : title}
      </p>
    </Link>
  );
};
export default SideBarItem;
