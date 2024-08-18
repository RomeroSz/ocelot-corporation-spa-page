/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    experimental: { optimizeCss: true },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
