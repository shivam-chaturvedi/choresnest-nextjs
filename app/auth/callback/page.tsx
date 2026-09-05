"use client";

import { useEffect } from "react";

export default function AuthCallback() {
  useEffect(() => {
    const hash = window.location.hash;

    const appUrl = "com.choresnest://auth-callback" + hash;

    window.location.href = appUrl;

    const fallbackTimer = window.setTimeout(() => {
      window.location.href = "https://play.google.com/store/apps/details?id=com.choresnest";
    }, 2000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return <p className="px-4 py-20 text-left text-lg text-foreground">Opening Chores Nest...</p>;
}
