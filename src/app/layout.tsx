"use client";
import "./globals.css";
import type { Metadata } from "next";
import Header from "./header";
import Box from "@mui/material/Box";

import Footer from "./footer";
import { MdFontDownload } from "react-icons/md";

import { Inter } from "next/font/google";
import sideBarData from "./components/sideData";
import SideBarItem from "./components/SideBarSingleItem";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box className=" min-h-screen box-border flex bg-grey ">
          <Box className="bg-white pt-8 w-23  border px-3 border-r flex flex-col gap-20 items-center justify-items-start">
            <Box>
              <MdFontDownload size={32} className="text-purple-400" />
            </Box>

            <Box className="flex flex-col gap-4  ">
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
          <Box className="flex flex-col flex-1 gap-9  ">
            <Header />
            {children}
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  );
}
