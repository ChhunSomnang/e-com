/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"images.pexels.com",
            },
            {
                protocol: "https",
                hostname:"i.pinimg.com",
            },
            {
                protocol: "https",
                hostname:"w7.pngwing.com",
            },
            {
                protocol: "https",
                hostname:"www.discover.com",
            },
        ],
    },
};

export default nextConfig;
