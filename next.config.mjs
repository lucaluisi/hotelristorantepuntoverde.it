/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            // https invece di http pk il redirect del reverse proxy da problemi
            {
                source: '/tracking-system/script.js',
                destination: `https://${process.env.STATS_SERVER}/script.js`,
            },
            {
                source: '/tracking-system/api/send',
                destination: `https://${process.env.STATS_SERVER}/api/send`,
            },
        ];
    },
};

export default nextConfig;
