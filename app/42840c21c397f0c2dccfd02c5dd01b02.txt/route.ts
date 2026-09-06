export const dynamic = "force-static";

export async function GET() {
  return new Response("42840c21c397f0c2dccfd02c5dd01b02", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
