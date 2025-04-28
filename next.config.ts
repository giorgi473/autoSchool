import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.starti.ge" },
      // { protocol: "https", hostname: "avtoskola-varketilshi.ge" },
      // { protocol: "https", hostname: "exam.avtoskola-varketilshi.ge" },
    ],
  },
};

export default nextConfig;
