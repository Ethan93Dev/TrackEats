import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { authType } from "@/types/type";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: authType = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          message: "Missing input data",
        },
        { status: 409 }
      );
    }

    const alreadyUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (alreadyUser) {
      return NextResponse.json(
        { message: "there is already a user with that emial plz login" },
        { status: 401 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: `${newUser.username} created successfully`,
      success: true,
      user: newUser,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
