/** @type {import('next').NextConfig} */
// Use basePath only in production so local dev works at http://localhost:3000/
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProduction ? "/medhaverse" : "",
  assetPrefix: isProduction ? "/medhaverse/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
