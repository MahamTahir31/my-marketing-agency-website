import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required because Next.js default image optimization relies on a server
  },
};
export default nextConfig;
