import { prisma } from "../../../prisma/client"
import { NextResponse, NextRequest } from 'next/server'
export async function POST(request: NextRequest) {
  try {
    const post = await request.json();
    await prisma.post.create({
      data: { title: post.newTodo, content: post.newTodo, published: true },
    })
    return NextResponse.json({ msg: "created success", status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error, status: 500 });
  }
}