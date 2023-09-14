import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Khachen Chaiyo",
    studentId: "630612177",
  });
};
