/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/login/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
