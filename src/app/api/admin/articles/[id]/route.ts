import { prisma } from '@/src/db';
import { NextResponse, NextRequest } from 'next/server';

export const PUT = async (req: NextRequest, { params }:any) => {
    const { id } = params;
    const data = await req.json();
    await prisma.articles.update({
        where: {id},
        data,
    });
    return NextResponse.json({
        success: true,
        errorMessage: '修改成功',
    })
}

export const DELETE = async (req: NextRequest, { params }:any) => {
    const { id } = params;
    await prisma.articles.delete({
        where: {id},
    });
    return NextResponse.json({
        success: true,
        errorMessage: '删除成功',
    })
}



export const GET = async (req: NextRequest, { params }: any) => {
    debugger
    console.log("11222")
    const {id} = params.id
    
    const data = await req.json()
   
    await prisma.articles.findUnique({
        where:{id}
    });
    try{
        return NextResponse.json({
            success: true,
            code:202,
            errorMessage: '获取成功',
            data:data
        })
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts!");

    }
    
}



