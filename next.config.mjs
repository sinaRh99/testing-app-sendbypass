/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-dev.sendbypass.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sendbypass.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.sendbypass.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
