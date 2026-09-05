"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "sZjvbFgmlAc";
const VIDEO_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[30px] border border-border bg-background/90 shadow-[0_30px_60px_rgba(15,23,42,0.2)]">
      <div className="aspect-[9/16] w-full">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={VIDEO_URL}
            title="Chores Nest App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play Chores Nest demo"
              className="relative h-full w-full cursor-pointer overflow-hidden focus:outline-none"
            >
            <Image
              src="/thumbnail.png"
              alt="Chores Nest app demo thumbnail"
              fill
              className="object-cover"
              sizes="320px"
              loading="lazy"
              priority={false}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/20">
                <Play className="h-6 w-6 text-white" />
              </span>
            </span>
            </button>
        )}
      </div>
    </div>
  );
}
