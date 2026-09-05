"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || lastPathRef.current === pathname) {
      return;
    }

    lastPathRef.current = pathname;
    let active = true;

    const runTracker = async () => {
      if (!process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) {
        return;
      }

      const { trackPageView } = await import("@/services/analytics");
      if (!active) {
        return;
      }

      await trackPageView(pathname);
    };

    void runTracker();

    return () => {
      active = false;
    };
  }, [pathname]);

  return null;
}
