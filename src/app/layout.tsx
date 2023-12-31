"use client";
import "./globals.css";
import type { Metadata } from "next";
import Header from "./header";
import Box from "@mui/material/Box";

import Footer from "./footer";
import { MdFontDownload } from "react-icons/md";

import { Inter } from "next/font/google";
import sideBarData from "./utils/sideData";
import SideBarItem from "./components/SideBarSingleItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "test app",
  description: "Test of UI designing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path=usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box className=" h-[100svh] p-0 m-0   box-border flex bg-grey ">
          <Box className="bg-white   h-full overflow-y-auto sticky top-40   border px-3 border-r hidden md:flex flex-col gap-20 items-center justify-items-start">
            <Link href="/" className="hover:cursor-pointer sticky z-10 h-20  flex items-center top-2 ">
              <MdFontDownload size={42} className="text-purple-400 my-auto" />
            </Link>

            <Box className="flex flex-col  w-20  gap-2 lg:gap-4  ">
              {sideBarData?.map((item) => (
                <SideBarItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </Box>
          </Box>
          <Box className="flex flex-col flex-1 h-full gap-2 md:gap-4 lg:gap-9 ">
            <Header />
            {children}
            {path.split('/').pop()?.trim().length !== 0 && <Footer />}
            
          </Box>
        </Box>
      </body>
    </html>
  );
}
