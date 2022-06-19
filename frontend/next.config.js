/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "my-value",
    NEXT_PUBLIC_STRAPI_URL: "http://localhost:1337",
  },
};

module.exports = nextConfig;
