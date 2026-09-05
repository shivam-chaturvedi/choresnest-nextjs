"use client";

import { useEffect } from "react";

const APP_SCHEME = "com.choresnest://auth-callback";
const FALLBACK_URL = "https://play.google.com/store/apps/details?id=com.choresnest";
const REDIRECT_DELAY_MS = 2000;

function buildDeepLink(hash: string) {
  if (!hash) {
    return APP_SCHEME;
  }

  return hash.startsWith("#") ? `${APP_SCHEME}${hash}` : `${APP_SCHEME}#${hash}`;
}

export default function AuthPage() {
  useEffect(() => {
    const hash = window.location.hash || "";
    const appUrl = buildDeepLink(hash);

    window.location.href = appUrl;

    const timerId = window.setTimeout(() => {
      window.location.href = FALLBACK_URL;
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-6 py-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[32px] bg-secondary shadow-lg shadow-[#1f9db1]/30">
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10 stroke-current text-[#1c8c9c]"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="18" y="10" width="28" height="44" rx="6" />
            <circle cx="32" cy="48" r="2" />
          </svg>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground">Redirecting to Chores Nest</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If the app didn&apos;t open automatically, make sure you have Chores Nest installed on your device.
          </p>
        </div>
        <a
          href={FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[12px] px-10 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 bg-gradient-to-br from-[#23a0b2] via-[#1c8c9c] to-[#146874] shadow-lg shadow-[#146874]/40"
        >
          Get the App
        </a>
        <p className="text-sm text-muted-foreground">
          You will be redirected to the app store if the Chores Nest application is not installed yet.
        </p>
      </div>
    </div>
  );
}
