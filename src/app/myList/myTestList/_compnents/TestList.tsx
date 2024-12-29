'use client'
import React, {useState, useEffect}from 'react'
type Item = {
    id:string,
    name :String,
    description: String,
}

function TestList() {
  const [data, setData] = useState<Item[]> ([])
  useEffect(() => {
    fetch('/api/testList')
        .then((res) => res.json())
        .then((res) => {
          console.log('111')
          setData(res.data)})
  })

  
  return (
    <div className='test_list'>
      TestList555
      <ul>
        {data.map((item) => 
        <li key={item.id}>
          {item.name}:{item.description}
         
          </li>)}
      </ul>
    </div>
  )
}

export default TestList
