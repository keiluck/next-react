import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: { id : number};
    searchParams: any;
}

export async function generateMetadata({
    params,searchParams,
}:Props):Promise<Metadata>{
    return{
        title:'detail-page' + params.id
    }
}

function TestListDetailPage({params, searchParams}: Props) {
  return (
    <div>
      TestListDetailPage
      ListDetailPage--- {params.id},
      query---{searchParams.name}
    </div>
  )
}

export default TestListDetailPage