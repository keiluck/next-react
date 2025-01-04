import { Metadata } from 'next'
import React from 'react'
import Detail from '../_compnents/Detail';

type Props = {
    params: {   
      id: string;
      };
      searchParmas:any
}

type product = {
    title: string;
    content: string;
  };


export async function generateMetadata({
    params,searchParmas
}:Props):Promise<Metadata>{
  debugger
    return{
        title:`title ${params.id}`,
    }
}


async function TestListDetailPage({params, searchParmas}: Props) {
  debugger
  console.log(123213)

  const response = await fetch(`/api/admin/articles/${params.id}`);
  const product = await response.json()
    
    return (
      <div>
        <h1>Article Details</h1>
        <div>ID: {params.id}</div>
        searchParmas: {searchParmas}
      
        {product.title}
      </div>
    );
  
}

export default TestListDetailPage


// app/myTestList/[id]/page.tsx
