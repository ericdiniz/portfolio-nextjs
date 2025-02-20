/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    ...(isProd && {
        basePath: "/portfolio-nextjs",
        assetPrefix: "/portfolio-nextjs/",
    }),
};

module.exports = nextConfig;
