import { NextResponse } from "next/server";
import axios from "axios";

const WAKEUP_API_KEY = "";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  if (action === "deploy") {
  } else if (action === "deploy") {
  }

  return NextResponse.json({});
}
