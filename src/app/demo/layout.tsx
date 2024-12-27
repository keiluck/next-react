import React from 'react'

function DemoLayout({children}:any) {
  return (
    <div className='demo-home'>
      <h2>muban</h2>
      {children}
    </div>
  )
}

export default DemoLayout
