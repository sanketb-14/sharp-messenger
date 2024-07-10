/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['xsgames.co', 'lh3.googleusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
      };
    }
    return config;
  },
};


export default nextConfig;
