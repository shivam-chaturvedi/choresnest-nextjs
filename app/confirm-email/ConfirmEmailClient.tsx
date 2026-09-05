"use client";

import { useEffect, useState } from "react";

const APP_DEEP_LINK = "com.choresnest://auth-callback";

export default function ConfirmEmailClient() {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSeconds((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [seconds]);

  useEffect(() => {
    if (seconds !== 0) {
      return;
    }

    window.location.href = APP_DEEP_LINK;
  }, [seconds]);

  const openAppNow = () => {
    window.location.href = APP_DEEP_LINK;
  };

  return (
    <main
      style={{ textTransform: "none" }}
      className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12"
    >
      <div className="w-full max-w-5xl space-y-8 rounded-[36px] border border-border bg-gradient-to-br from-background/90 via-background/95 to-background/80 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <header className="space-y-4 text-foreground">
          <div className="rounded-[32px] bg-[#021c3e] px-6 py-8 text-white shadow-[0_30px_60px_rgba(2,28,62,0.45)]">
            <p className="tracking-[0.4em] text-xs uppercase text-white/60">Email confirmed</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Thank you — your email is confirmed
            </h1>
            <p className="max-w-3xl text-lg text-white/70 md:text-xl">
              Your inbox has been verified. We are routing you back into the Chores Nest app so you
              can continue from where you left off.
            </p>
          </div>
        </header>

        <section className="rounded-[28px] border border-border bg-white/95 p-8 shadow-[0_25px_45px_rgba(15,23,42,0.2)] text-foreground">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-slate-700">
              Since your email was confirmed, we&apos;ll redirect you straight back into the app with
              the secure deep link. If you need help, visit support once the app opens.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background/30 p-4 shadow-inner shadow-slate-100">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Auto-opening app in
              </span>
              <span className="flex items-baseline gap-1 text-4xl font-black text-slate-800 md:text-5xl">
                <span>{seconds}</span>
                <span className="text-base font-normal text-slate-500">seconds</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The browser will automatically hand you off to <code>com.choresnest://auth-callback</code>{" "}
              once the countdown hits zero. You can also open the app immediately with the button below.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-start">
            <button
              type="button"
              onClick={openAppNow}
              style={{ textTransform: "none" }}
              className="inline-flex items-center justify-center rounded-full border border-[#f2dfc3] bg-gradient-to-br from-[#fff7e3] to-[#ffe1b3] px-10 py-3 text-lg font-semibold text-[#0d2054] shadow-[0_20px_35px_rgba(13,32,84,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_45px_rgba(13,32,84,0.45)]"
            >
              Open app now
            </button>
          </div>
        </section>

        <footer className="text-sm text-slate-400">
          <p>
            Need help? Visit the Chores Nest support center once the app opens or reply to the
            verification email.
          </p>
        </footer>
      </div>
    </main>
  );
}
