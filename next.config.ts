import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Keeps Turbopack scoped to this project when a parent directory
    // happens to contain a package-lock.json.
    root: process.cwd(),
  },
};

export default nextConfig;
