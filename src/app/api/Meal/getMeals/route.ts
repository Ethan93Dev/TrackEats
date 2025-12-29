import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json({ message: "Please login" }, { status: 401 });
    }

    const meals = await prisma.meal.findMany({
      where: {
        userId,
      },
      orderBy: {
        eatenAt: "desc",
      },
    });

    return NextResponse.json({ meals }, { status: 200 });
  } catch (error) {
    console.error("Error fetching meals:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
