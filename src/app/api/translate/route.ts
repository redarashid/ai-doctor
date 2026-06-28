import { NextRequest, NextResponse } from "next/server";
import { translate } from "google-translate-api-x";

export async function POST(req: NextRequest) {
  try {
    const { text, target } = await req.json();

    const result = await translate(text, {
      to: target || "ar",
    });
    console.log(result);

    return NextResponse.json({
      translated: result.text,
    });
  } catch (error) {
    console.error("Translation Error:", error);

    return NextResponse.json(
      {
        translated: "",
      },
      { status: 500 }
    );
  }
}