import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { registerSchema } from "@/validators/registerSchema";
import { registerUser } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = registerSchema.parse(body);

    await registerUser(data);

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.issues[0].message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}