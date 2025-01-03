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