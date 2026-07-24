import { NextResponse } from "next/server";
import { challengeFormSchema } from "@/lib/challenge-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = challengeFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid submission." },
      { status: 400 }
    );
  }

  // TODO: wire up to an inbox/CRM (e.g. Resend, HubSpot). Logged for now so
  // submissions aren't silently dropped before that integration exists.
  console.log("New challenge submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
