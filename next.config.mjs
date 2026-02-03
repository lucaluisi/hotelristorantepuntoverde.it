/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                source: '/tracking-system/script.js',
                destination: `http://${process.env.STATS_SERVER}/script.js`,
            },
            {
                source: '/tracking-system/api/send',
                destination: `http://${process.env.STATS_SERVER}/api/send`,
            },
        ];
    },
};

export default nextConfig;
