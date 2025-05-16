import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://i.imgur.com/**'), 
      new URL('https://placehold.co/**'), 
      new URL('https://res.cloudinary.com/**'), 
      new URL('https://picsum.photos/**'),
      new URL('https://www.shutterstock.com/**')]
  },
};

export default nextConfig;
