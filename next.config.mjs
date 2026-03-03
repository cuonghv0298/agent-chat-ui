/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

// export default nextConfig;

export default {
  allowedDevOrigins: ['10.10.193.73', '10.10.193.73:3000'],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};