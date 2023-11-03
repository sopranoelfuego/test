
import {MdDashboard,MdOutlineSupportAgent,MdOutlineHandshake,MdStore,MdLibraryBooks,MdBarChart,MdAdminPanelSettings} from "react-icons/md";



const sideBarData=[
    {
        id:1,
        icon:<MdDashboard size={25} />,
        title:"Dashboard",
        link:"/"

    },
    {
        id:2,
        icon:<MdOutlineSupportAgent size={25}/>,
        title:"Agents",
        link:""

    },
    {
        id:3,
        icon:<MdOutlineHandshake size={25}/>,
        title:"Providers",
        link:""

    },
    {
        id:4,
        icon:<MdStore size={25}/>,
        title:"Stores",
        link:""

    },
    {
        id:5,
        icon:<MdLibraryBooks size={25}/>,
        title:"Reports",
        link:""
    },
    {
        id:6,
        icon:<MdBarChart size={25}/>,
        title:"Transactions",
        link:""
    },
    {
        id:7,
        icon:<MdAdminPanelSettings size={25}/>,
        title:"Admins",
        link:"/admins"
    }
]
export default sideBarData