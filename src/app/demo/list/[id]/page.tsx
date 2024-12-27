import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: { id:string};
    searchParams:any;
}
export async function generateMetadata({
    params,searchParams,
}:Props):Promise<Metadata>{
    return{
        title:'detail-page' + params.id
    }
}

function ListDetailPage({ params, searchParams }:Props) {
  return (
    <div className='list-detail-page'>
      ListDetailPage---{params.id},
      query---{searchParams.name}
    </div>
  )
}

export default ListDetailPage
