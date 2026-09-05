import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-heading font-light text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground font-light">Oops! Page not found</p>
        <Link href="/" className="text-primary font-light hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
