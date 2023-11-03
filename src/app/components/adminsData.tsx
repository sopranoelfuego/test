
export interface IADSingle{
      id:number,
        name:string,
        src:string,
        role:string,
        time:string,
        status:'ACTIVE' | 'PENDING' | 'INACTIVATE',
        link:string
}


const adminsData:IADSingle[]=[
    {
        id:1,
        name:"Gregory Tran",
        src:"will.jpg",
        role:"ADMIN-0020",
        status:'ACTIVE',
        time:"4 days ago",
        link:"/"

    },
   
    {
        id:2,
        name:"Theresa Price",
        src:"mady.jpg",
        status:'ACTIVE',
        role:"ADMIN-0019",
        time:"27 juin",
        link:"/"

    },
    {
        id:3,
        name:"Kyle Evans ",
        src:"will.jpg",
        role:"ADMIN-0018",
        time:"4 days ago",
       status:'ACTIVE',
        link:"/"

    },
    {
        id:4,
        name:"Antony Mendes  ",
        src:"will.jpg",
        role:"ADMIN-0018",
        status:'INACTIVATE',
        time:"4 days ago",
        link:"/"

    },
    {
        id:5,
        name:"Antony Mendes ",
        src:"will.jpg",
        status:'ACTIVE',
        role:"ADMIN-0017",
        time:"26 juin",
        link:"/"

    },
    {
        id:5,
        name:"Ashley Ray ",
        src:"will.jpg",
        role:"ADMIN-0012",
        status:'ACTIVE',
        time:"27 juin",
        link:"/"

    },
   
]
export default adminsData