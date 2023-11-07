import React from 'react'
import ListOfAdmins from './ListOfAdmins'
import AdminProfile from './AdminProfile'

function page() {
  return (
    <div className='w-full px-12 sm:max-h-screen md:max-h-[44rem] flex sm:flex-col md:flex-row overflow-y-hidden border-box gap-4 flex-1  items-center justify-center'>
        <ListOfAdmins/>
        <AdminProfile/>
    </div>
  )
}

export default page