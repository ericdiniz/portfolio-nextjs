/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/portfolio-nextjs",
    assetPrefix: "/portfolio-nextjs",
};

module.exports = nextConfig;
