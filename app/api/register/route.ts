import { NextResponse } from "next/server";
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
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}