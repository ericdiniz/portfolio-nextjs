/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    ...(isGithubPages && {
        basePath: "/portfolio-nextjs",
        assetPrefix: "/portfolio-nextjs",
    }),
};

module.exports = nextConfig;
