/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    experimental: {
        appDir: true,
    },
    ...(isProd && {
        basePath: "/portfolio-nextjs",
        assetPrefix: "/portfolio-nextjs/",
    }),
};

export default nextConfig;
