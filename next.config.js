/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
