import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { mealSchema } from "@/lib/validators/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parseResult = mealSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { errors: parseResult.error.issues },
        { status: 400 }
      );
    }

    const { name, calories } = parseResult.data;

    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json({ message: "Please login" }, { status: 401 });
    }

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const meal = await prisma.meal.create({
      data: {
        name,
        calories,
        userId,
      },
    });

    return NextResponse.json(
      {
        message: "Meal created successfully",
        meal,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating meal:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
