import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://api.qrserver.com/v1/create-qr-code/")],
    },
};

export default nextConfig;
