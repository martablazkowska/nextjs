const withTM = require('next-transpile-modules')(['common'])
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    images: {
        domains: ['www.casinogods.com']
    },
    i18n: {
        locales: ['en-EU', 'de-DE'],
        defaultLocale: 'en-EU'
    }
}

module.exports = withPlugins([withTM], nextConfig);

