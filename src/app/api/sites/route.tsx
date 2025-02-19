/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/helpers/db";
import { CreateSiteDto } from "@/helpers/dtos";
import { createSiteSchema } from "@/helpers/validationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateSiteDto;

    const validation = createSiteSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );

    const newSite = await prisma.site.create({
      data: {
        name: body.name,
      },
    });
    return NextResponse.json(newSite, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const sites = await prisma.site.findMany();

    return NextResponse.json(sites, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
