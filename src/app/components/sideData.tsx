
import {MdDashboard,MdOutlineSupportAgent,MdOutlineHandshake,MdStore,MdLibraryBooks,MdBarChart,MdAdminPanelSettings} from "react-icons/md";



const sideBarData=[
    {
        id:1,
        icon:<MdDashboard size={30} />,
        title:"Dashboard",
        link:"/"

    },
    {
        id:2,
        icon:<MdOutlineSupportAgent size={30}/>,
        title:"Agents",
        link:"/agents"

    },
    {
        id:3,
        icon:<MdOutlineHandshake size={30}/>,
        title:"Providers",
        link:"/Providers"

    },
    {
        id:4,
        icon:<MdStore size={30}/>,
        title:"Stores",
        link:"/stores"

    },
    {
        id:5,
        icon:<MdLibraryBooks size={30}/>,
        title:"Reports",
        link:"/reports"
    },
    {
        id:6,
        icon:<MdBarChart size={30}/>,
        title:"Transactions",
        link:"/transactions"
    },
    {
        id:7,
        icon:<MdAdminPanelSettings size={30}/>,
        title:"Admins",
        link:"/admins"
    }
]
export default sideBarData