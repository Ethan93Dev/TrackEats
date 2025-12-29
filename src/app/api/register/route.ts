import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { z } from "zod";

// Define Zod schema for validation
const authSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate using safeParse
    const parseResult = authSchema.safeParse(body);

    if (!parseResult.success) {
      // Validation failed, extract errors
      return NextResponse.json(
        { errors: parseResult.error.issues },
        { status: 400 }
      );
    }

    // Validated data
    const { username, email, password } = parseResult.data;

    const alreadyUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (alreadyUser) {
      return NextResponse.json(
        { message: "There is already a user with that email. Please login." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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
