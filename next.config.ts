import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/football",
  assetPrefix: "/football",
  trailingSlash: true, // optional but recommended for basePath
};

export default nextConfig;
