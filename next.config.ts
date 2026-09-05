import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const rootDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: join(rootDir),
  },
  devIndicators: false,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
