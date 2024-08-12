/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
};
export default nextConfig;
