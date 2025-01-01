
import { Metadata } from 'next'
import React from 'react'
import  {useEffect, useState} from 'react'
// import { useRouter } from "next/router";

type Props = {
    params: {   
      id: string;
      };
      query: any
}

export async function generateMetadata({
    params,query
}:Props):Promise<Metadata>{
    return{
        title:`detail ${params.id}`
    }
}


function TestListDetailPage({params, query}: Props) {

 
  return (
    <div>
      TestListDetailPage
     
      ListDetailPage--- {params.id},
      
    </div>
  )
}

export default TestListDetailPage