import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Enables React's Strict Mode for highlighting potential issues
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**", // Matches all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
