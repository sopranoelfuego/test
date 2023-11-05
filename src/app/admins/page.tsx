import React from 'react'
import ListOfAdmins from './ListOfAdmins'
import AdminProfile from './AdminProfile'

function page() {
  return (
    <div className='w-full px-12 max-h-[44rem] overflow-y-hidden border-box gap-4 flex-1 flex items-center justify-center'>
        <ListOfAdmins/>
        <AdminProfile/>
    </div>
  )
}

export default page