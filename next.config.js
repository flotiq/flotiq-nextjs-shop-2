/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['flotiq-components-react'],
    images: {
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        dangerouslyAllowSVG: true,
        remotePatterns: [{ hostname: 'api.flotiq.com' }],
    },
    webpack: (config, options) => {
        if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts)x?$/] },
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = nextConfig
