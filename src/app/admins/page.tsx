import React from 'react'
import ListOfAdmins from './ListOfAdmins'
import AdminProfile from './AdminProfile'

function page() {
  return (
    <div className='w-full px-12 border-box gap-4 flex-1 flex items-center justify-between'>
        <ListOfAdmins/>
        <AdminProfile/>
    </div>
  )
}

export default page