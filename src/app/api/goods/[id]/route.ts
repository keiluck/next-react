import { NextResponse } from 'next/server';

export const GET = (req:NextResponse, {params}:any) => {
    return NextResponse.json({
        sucess: true,
        errorMessage: '获取单条记录' + params.id,
        data: {}
    })
}