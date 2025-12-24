/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["i.ibb.co", "i.ibb.co.com", "lh3.googleusercontent.com"], // trusted hostname
  },
};

export default nextConfig;
