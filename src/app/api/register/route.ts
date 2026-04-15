import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const name = body.name;
  const email = body.email;
  const password = body.password;

  // 🔥 تحقق بسيط
  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // 🔥 تسجيل وهمي (مؤقت)
  return NextResponse.json({
    message: "User registered successfully",
    user: {
      name,
      email,
    },
  });
}