import { promises as fs } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "llms-full.txt");
    const content = await fs.readFile(filePath, "utf-8");

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
