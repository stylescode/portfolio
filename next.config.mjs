/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['skillicons.dev', 'pngimg.com', 'upload.wikimedia.org'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
