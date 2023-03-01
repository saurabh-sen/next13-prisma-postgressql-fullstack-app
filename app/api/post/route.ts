import { prisma } from "../../../prisma/client"
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const newData = await prisma.post.findMany();
    return NextResponse.json({ data: newData, status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error, status: 500 });
  }
}
