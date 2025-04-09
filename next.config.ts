import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // For Github pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // For Github pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
