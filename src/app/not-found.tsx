import Link from "next/link";
import Box from "@mui/material/Box";
export default function NotFound() {
  return (
    <Box className="flex-1  text-center justify-center  flex w-full">
      <Box className="my-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-lg font-semibold">Oops!,This Page is still in building ...</h1>
        <Link href="/" className="px-4 py-2 bg-blue-400 rounded-md hover:opacity-100 opacity-70 transition duration-[400ms] text-white">Return Home</Link>
      </Box>
    </Box>
  );
}
