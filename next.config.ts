import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "xelaris.co",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "xelaris.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost:**",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "xelaris.vercel.app",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
