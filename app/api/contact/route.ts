import { NextResponse } from "next/server";

const ZAPIER_URL = "https://hooks.zapier.com/hooks/catch/22126987/u1edvyw/";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const r = await fetch(ZAPIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return NextResponse.json(
        { success: false, message: `Error en Zapier: ${text || r.status}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Error inesperado" },
      { status: 500 }
    );
  }
}
