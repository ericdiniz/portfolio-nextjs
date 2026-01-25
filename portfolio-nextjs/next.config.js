const nextConfig = {
    images: {
        unoptimized: true,
    },
    // Skip ESLint during build on Vercel to avoid config serialization issues.
    // IMPORTANT: This is a temporary mitigation. Upgrade Next.js / ESLint config
    // to fully fix the root cause (see deployment logs about vulnerable Next.js).
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    // basePath: "/portfolio-nextjs",
    // assetPrefix: "/portfolio-nextjs/",
};

export default nextConfig;