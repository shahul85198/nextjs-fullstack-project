import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("query");
  console.log(":: COURSE API GET ::", searchText);

  const prisma = new PrismaClient();
/*
  let courses: any = [];
  if(searchParams) {
    courses = await prisma.course.findMany({
        where: {
            title: {
                contains: searchText
            }
        }
    });
  } else {
    courses = await prisma.course.findMany({})
  }
*/
  const course = await prisma.course.findMany({
     where: {
        OR: [
            {
                title: {
                    contains: searchText || ""
                }
            },
            {
                description: {
                    contains: searchText || ""
                }
            }
        ]
     }
  })

    return NextResponse.json({
        status: 'ok',
        data: course
    })
}