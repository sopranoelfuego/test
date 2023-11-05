
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

const Footer=()=>{
    return(
        <Box className="h-20 w-full border border-t-2 flex items-center  justify-start px-12 mr-1 border-box">

        <Box className="w-full flex items-center text-base opacity-80 justify-start gap-2   ">
            <p>&copy; 2020 Shora</p>
             <p>|</p>
            <p> All rights reserved.</p>
        </Box>
        </Box>
    )
}

export default Footer