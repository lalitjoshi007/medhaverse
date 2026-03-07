/** @type {import('next').NextConfig} */
// No basePath so the site works at the root (e.g. medhaverse.co.in)
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: { unoptimized: true },
};

export default nextConfig;
