import React, { ReactNode } from 'react'

function AdminLayout({children}:{ children: ReactNode}) {
  return (
    <div className='demo-admin p-8 bg-rose-600 text-white'>
      <h4>admin</h4>
      {children}
    </div>
  )
}

export default AdminLayout
