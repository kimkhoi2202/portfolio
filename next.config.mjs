/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/Khoi Lam Resume.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
