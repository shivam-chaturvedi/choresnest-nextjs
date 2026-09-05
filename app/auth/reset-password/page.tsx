"use client";

import { useEffect } from "react";

const APP_SCHEME = "com.choresnest://auth-callback";
const FALLBACK_URL = "https://play.google.com/store/apps/details?id=com.choresnest";
const REDIRECT_DELAY_MS = 2000;

function buildResetLink(hash: string) {
  const cleaned = hash.startsWith("#") ? hash.slice(1) : hash;
  return cleaned ? `${APP_SCHEME}?${cleaned}` : APP_SCHEME;
}

export default function ResetPasswordLandingPage() {
  useEffect(() => {
    const hash = window.location.hash || "";
    const deepLink = buildResetLink(hash);

    window.location.href = deepLink;

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
            <path d="M32 22c-4 0-7 3-7 7v12h14V29c0-4-3-7-7-7Z" />
            <path d="M24 36v6c0 4 4 7 8 7s8-3 8-7v-6" />
            <circle cx="41" cy="32" r="2" />
          </svg>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground">Reset Your Password</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If the Chores Nest app didn&apos;t open automatically, please open the app manually to complete your password reset.
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
          Once you install Chores Nest, come back here so the reset link opens inside the app.
        </p>
      </div>
    </div>
  );
}
