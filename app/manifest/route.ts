const manifest = {
  name: "Chores Nest",
  short_name: "Chores Nest",
  description: "Family organizer app for managing chores, tasks, calendars, finances, and notes.",
  start_url: "/",
  scope: "/",
  display: "standalone",
  background_color: "#0f172a",
  theme_color: "#0ea5e9",
  categories: ["productivity"],
  icons: [
    {
      src: "/app_icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json",
    },
  });
}
