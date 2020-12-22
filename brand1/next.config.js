const withTM = require('next-transpile-modules')(['common'])
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    images: {
        domains: ['www.casinogods.com']
    }
}

module.exports = withPlugins([withTM], nextConfig);

