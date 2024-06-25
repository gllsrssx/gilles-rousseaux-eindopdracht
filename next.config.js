const withPWA = require('next-pwa')({
    dest: 'public',
    // other configuration options
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
        ],
    },
};

module.exports = withPWA(nextConfig);