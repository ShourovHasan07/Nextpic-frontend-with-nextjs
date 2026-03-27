

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:8002/frontend/profile/dashboard", { cache: "no-store" });
    const result = await res.json();

    //console.log("Backend result:", result);

    if (result?.success) {
      return NextResponse.json({
        success: true,
        data: result.data,
        message: "Profile fetched successfully",
      });
    }

    return NextResponse.json({
      success: false,
      data: null,
      message: "Profile not found",
    }, { status: 404 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, data: null, message: message }, { status: 500 });
  }
}