import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,   // ✅ KJO E ZGJIDH ERRORIN

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
