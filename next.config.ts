import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "images.clerk.dev", // ✅ Add this
    ],
  },
};

export default nextConfig;