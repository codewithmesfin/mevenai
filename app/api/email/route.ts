import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./_emailService";



export async function POST(request: NextRequest) {

  const req = await request.json()
  
  const { subject, from, to, message } = req;
  try {
    await sendMail(subject, from, to, message);
    return NextResponse.json({ code: 200, status: "Success", data: req.body });
  } catch (err: any) {
    throw err
  }

};

