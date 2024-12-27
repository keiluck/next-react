import React from 'react';
import { Metadata } from 'next';

import List from './_compnents/List';

export const metadata: Metadata = {
    title:'list-page',
    description: 'next-list-page',
    keywords: 'next.js,react'
}

function Listpage() {

  return (
    <div className='list-page'>
        listpage
        <List />
      
    </div>
  )
}

export default Listpage
