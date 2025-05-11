import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.starti.ge" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
    ],
    domains: [
      "letsenhance.io",
      "www.searchenginejournal.com",
      "encrypted-tbn0.gstatic.com",
      "media.istockphoto.com",
      "images.ctfassets.net",
      "iso.500px.com",
      "imgv3.fotor.com",
      "image-processor-storage.s3.us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
