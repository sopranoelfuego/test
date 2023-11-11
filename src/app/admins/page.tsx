import React from 'react'
import ListOfAdmins from './ListOfAdmins'
import AdminProfile from './AdminProfile'

function page() {
  return (
    <div className='w-full px-2 md:px-4 lg:px-12 max-h-screen md:max-h-[44rem] flex flex-col md:flex-row overflow-y-hidden border-box gap-4  flex-1  items-center justify-center'>
        <ListOfAdmins/>
        <AdminProfile/>
    </div>
  )
}

export default page