/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack:(config, { dev }) => {
    if (dev) {
      config.devtool = false; // Disable source maps in development
    }
    return config;
  },
};

export default nextConfig;
