import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // test logic مؤقت
  if (email === "test@test.com" && password === "12345678") {
    return NextResponse.json({
      message: "Login successful",
      token: "fake-token",
    });
  }

  return NextResponse.json(
    { message: "Invalid email or password" },
    { status: 401 }
  );
}