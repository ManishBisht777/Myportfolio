/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "my-value",
    NEXT_PUBLIC_STRAPI_URL: "http://localhost:1337",
  },
  async redirects() {
    return [
      {
        source: "http://localhost:3000/asdasdadsad",
        destination: "https://stackoverflow.com/posts/66662033",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
