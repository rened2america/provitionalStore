/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "politicozen-prod.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.merchlife.co",
        // pathname: '/s/files/**'
      },
      {
        protocol: "https",
        hostname: "merchlife.co",
        // pathname: '/s/files/**'
      },
    ],
  },
};

module.exports = nextConfig;
