"use client";

import { useEffect } from "react";

export default function ResetPassword() {
  useEffect(() => {
    const rawHash = window.location.hash || "";
    const hash = rawHash.startsWith("#") ? rawHash.slice(1) : rawHash;

    const url = "com.choresnest://auth-callback?" + hash;
    console.log("Redirecting to app with URL:", url);
    window.location.href = url;
  }, []);

  return (
    <p className="px-4 py-20 text-left text-lg text-foreground">
      Opening the app to reset your password...
    </p>
  );
}