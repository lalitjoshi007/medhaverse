/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // For GitHub Pages project site: https://<username>.github.io/medhaverse/
  basePath: "/medhaverse",
  assetPrefix: "/medhaverse/",
  images: { unoptimized: true },
};

export default nextConfig;
