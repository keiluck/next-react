import React from 'react'

import { Metadata } from 'next';

import TestList from './_compnents/TestList';

export const metadata: Metadata = {
  title: 'test-list-page',
  description: 'next-list-page',
  keywords: 'next.js,react'
}

function MyTestList() {
  return (
    <div>
      MyTestList333
      <TestList />
    </div>
  )
}

export default MyTestList
